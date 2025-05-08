/* global Highcharts topojson turf */
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedProvince } from '../../store/provinceActions';

const provinceData = [
    {
        'hc-key': 'pk-pb',
        name: 'Punjab',
        value: 1,
        description: 'Most populous province of Pakistan with Lahore as its capital.',
        color: '#a9cd98',
    },
    {
        'hc-key': 'pk-sd',
        name: 'Sindh',
        value: 2,
        description: "Home to Pakistan's largest city Karachi and ancient Indus valley civilizations.",
        color: '#a9cd98',
        textColor: 'black',
    },
    {
        'hc-key': 'pk-ba',
        name: 'Balochistan',
        value: 3,
        description: 'Largest province by area with Quetta as its capital.',
        color: '#a9cd98',
    },
    {
        'hc-key': 'pk-nw',
        name: 'KPK',
        value: 4,
        description: 'Known for its mountainous landscape with Peshawar as its capital. Includes the former FATA region.',
        color: '#a9cd98',
        textColor: 'black',
    },
    {
        'hc-key': 'pk-is',
        name: 'Federal',
        value: 5,
        description: "Federal capital territory containing Pakistan's capital city.",
        color: '#a9cd98',
        textColor: 'black',
    },
    {
        'hc-key': 'pk-jk',
        name: '',
        value: 6,
        description: 'Self-governing territory administered by Pakistan.',
        color: '#a9cd98',
    },
    {
        'hc-key': 'pk-na',
        name: 'GB',
        value: 7,
        description: 'Northern administrative territory known for its mountainous terrain.',
        color: '#a9cd98',
    },
];

function MapPakistan() {
    const [selectedProvinceIs, setSelectedProvinceIs] = useState(null);
    const [provincesData, setProvincesData] = useState(provinceData);
    const mapContainer = useRef(null);
    const chartRef = useRef(null);
    const [infoContent, setInfoContent] = useState({
        title: '',
        description: 'Click on a province to see more information. Use the navigation controls to zoom and pan the map.',
    });
    const dispatch = useDispatch();

    const selectedProvinceFromState = useSelector((state) => state.province.selectedProvince);


    // Handle province click to show only the clicked province
    const handleProvinceClick = (province) => {
        const selectedProvince = provinceData.map((p) => {
            if (p.name === province.name) {
                p.color = "#1b5642";
                setSelectedProvinceIs(province)
                dispatch(setSelectedProvince(province.name))
            }
            else {
                p.color = '#a9cd98';
            }
            return p;
        });
        if (selectedProvince) {
            setProvincesData(selectedProvince); // Update state with only the clicked province
            // Update the map's series data directly
            if (chartRef.current) {
                chartRef.current.series[0].setData(selectedProvince);

                const chart = chartRef.current;
                const point = chart.get(province['hc-key']);
            }

            console.log(`Province clicked: ${province.name}`);
        };
    }

    useEffect(() => {

        const initializeMap = async () => {
            try {
                if (!window.Highcharts || !window.topojson || !window.turf) {
                    throw new Error('Required libraries (Highcharts, topojson, turf) are not defined.');
                }

                const response = await fetch(
                    'https://code.highcharts.com/mapdata/countries/pk/pk-all.topo.json'
                );
                const topology = await response.json();
                const geojson = topojson.feature(topology, topology.objects.default);

                // Merge KPK and FATA
                const kpkFeature = geojson.features.find((f) => f.properties['hc-key'] === 'pk-nw');
                const fataFeature = geojson.features.find((f) => f.properties['hc-key'] === 'pk-ta');
                if (kpkFeature && fataFeature) {
                    const unionedFeature = turf.union(kpkFeature, fataFeature);
                    unionedFeature.properties = {
                        'hc-key': 'pk-nw',
                        name: 'Khyber Pakhtunkhwa',
                    };
                    geojson.features = geojson.features.filter(
                        (f) => f.properties['hc-key'] !== 'pk-nw' && f.properties['hc-key'] !== 'pk-ta'
                    );
                    geojson.features.push(unionedFeature);
                }

                // Initialize Highcharts map
                chartRef.current = Highcharts.mapChart(mapContainer.current, {
                    chart: {
                        map: geojson,
                        backgroundColor: 'transparent',
                        borderWidth: 0,
                        borderColor: 'transparent',
                        borderRadius: 0,
                    },
                    title: { text: '', style: { fontSize: '0px' } },
                    subtitle: { text: '', style: { fontSize: '0px' } },
                    mapNavigation: {
                        enabled: true,
                        buttonOptions: { verticalAlign: 'bottom', style: { color: '#333' } },
                    },
                    legend: { enabled: true },
                    colorAxis: { visible: false },
                    tooltip: {
                        headerFormat: '',
                        pointFormat: '<b>{point.name}</b><br>{point.description}',
                    },
                    series: [
                        {
                            data: provincesData,
                            keys: ['hc-key', 'value'],
                            joinBy: 'hc-key',
                            name: 'Pakistan Provinces',
                            states: { hover: { brightness: 0.1, borderColor: '#333' } },
                            dataLabels: {
                                enabled: true,
                                format: '{point.name}',
                                style: {
                                    fontSize: '11px',
                                    fontWeight: 'bold',
                                    textOutline: '1px',
                                },
                            },
                            point: {
                                events: {
                                    click: function () {
                                        setInfoContent({
                                            title: this.name,
                                            description: this.description,
                                        });
                                        handleProvinceClick(this);
                                    },
                                },
                            },
                        },
                    ],
                    plotOptions: {
                        map: {
                            allAreas: true,
                            colorByPoint: true,
                        },
                    },
                });

                // Apply custom colors and text colors
                chartRef.current.series[0].points.forEach((point) => {
                    const matchingProvince = provinceData.find(
                        (p) => p['hc-key'] === point['hc-key']
                    );
                    if (matchingProvince) {
                        const updateOptions = { color: matchingProvince.color };
                        if (matchingProvince.textColor) {
                            updateOptions.dataLabels = {
                                style: {
                                    color: matchingProvince.textColor,
                                    fontSize: '11px',
                                    fontWeight: 'bold',
                                    textOutline: '1px',
                                },
                            };
                        }
                        point.update(updateOptions, false);
                    }
                });
                chartRef.current.redraw();
            } catch (error) {
                console.error('Error initializing map:', error);
            }
        };

        initializeMap();

        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
                chartRef.current = null;
            }
        };
    }, []); // Empty dependency array since we handle data updates manually

    // Update map based on selectedProvinceFromState
    useEffect(() => {
        console.log(`==== ${selectedProvinceFromState} ====`)
        if (selectedProvinceFromState && selectedProvinceFromState !== "all") {
            const selected = provinceData.find((p) => p.name === selectedProvinceFromState);
            if (selected) {
                setSelectedProvince(selected.name);
                setInfoContent({
                    title: selected.name,
                    description: selected.description,
                });
                if (chartRef.current) {
                    const chart = chartRef.current;
                    // Update colors for all points
                    chart.series[0].points.forEach((point) => {
                        const matchingProvince = provinceData.find((p) => p['hc-key'] === point['hc-key']);
                        if (matchingProvince) {
                            const isSelected = matchingProvince.name === selected.name;
                            point.update({
                                color: isSelected ? '#1b5642' : '#a9cd98',
                                dataLabels: {
                                    style: {
                                        color: matchingProvince.textColor || 'black',
                                        fontSize: '11px',
                                        fontWeight: 'bold',
                                        textOutline: '1px',
                                    },
                                },
                            }, false);
                        }
                    });
                    chart.redraw();
                }
            }
        } else {
            setSelectedProvince(null); if (chartRef.current) {
                const chart = chartRef.current;
                // Update colors for all points
                chart.series[0].points.forEach((point) => {
                    point.update({
                        color: '#a9cd98',
                        dataLabels: {
                            style: {
                                color: 'black',
                                fontSize: '11px',
                                fontWeight: 'bold',
                                textOutline: '1px',
                            },
                        },
                    }, false);
                    chart.redraw();
                });
            }
        }
    }, [selectedProvinceFromState]);

    return (
        <div
            ref={mapContainer}
            className="w-full max-w-4xl h-[500px] min-w-[300px]"
        ></div>
    );
}

export default MapPakistan;