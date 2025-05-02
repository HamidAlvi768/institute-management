/* global Highcharts topojson turf */
import React, { useState, useEffect, useRef } from 'react';


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
        name: 'Islamabad Capital Territory',
        value: 5,
        description: "Federal capital territory containing Pakistan's capital city.",
        color: '#a9cd98',
    },
    {
        'hc-key': 'pk-jk',
        name: 'Azad Kashmir',
        value: 6,
        description: 'Self-governing territory administered by Pakistan.',
        color: '#a9cd98',
    },
    {
        'hc-key': 'pk-na',
        name: 'Gilgit-Baltistan',
        value: 7,
        description: 'Northern administrative territory known for its mountainous terrain.',
        color: '#a9cd98',
    },
];

function MapPakistan() {
    const mapContainer = useRef(null);
    const chartRef = useRef(null);
    const [infoContent, setInfoContent] = useState({
        title: '',
        description: 'Click on a province to see more information. Use the navigation controls to zoom and pan the map.',
    });

    useEffect(() => {
        const initializeMap = async () => {
            try {
                // Check if required global dependencies are available
                if (!window.Highcharts) {
                    throw new Error('Highcharts is not defined. Ensure the Highcharts scripts are included in index.html.');
                }
                if (!window.topojson) {
                    throw new Error('topojson is not defined. Ensure the topojson-client script is included in index.html.');
                }
                if (!window.turf) {
                    throw new Error('turf is not defined. Ensure the @turf/turf script is included in index.html.');
                }

                // Fetch and process map data
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
                    title: {
                        text: '',
                        style: { fontSize: '0px', fontWeight: 'bold' },
                    },
                    subtitle: {
                        text: '',
                        style: { fontSize: '0px' },
                    },
                    mapNavigation: {
                        enabled: false,
                        buttonOptions: {
                            verticalAlign: 'bottom',
                            style: { color: '#333' },
                        },
                    },
                    legend: { enabled: false, title: { text: 'Provinces' } },
                    colorAxis: { visible: false },
                    tooltip: {
                        headerFormat: '',
                        pointFormat: '<b>{point.name}</b><br>{point.description}',
                    },
                    series: [
                        {
                            data: provinceData,
                            keys: ['hc-key', 'value'],
                            joinBy: 'hc-key',
                            name: 'Pakistan Provinces',
                            states: {
                                hover: { brightness: 0.1, borderColor: '#333' },
                            },
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
                                    },
                                },
                            },
                        },
                    ],
                    plotOptions: {
                        series: {
                            point: {
                                events: {
                                    click: function () {
                                        setInfoContent({
                                            title: this.name,
                                            description: this.description,
                                        });
                                    },
                                },
                            },
                        },
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

        // Cleanup chart on component unmount
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
                chartRef.current = null;
            }
        };
    }, []);

    return (

        <div
            ref={mapContainer}
            className="w-full max-w-4xl h-[600px] min-w-[310px]"
        ></div>

    );
}

export default MapPakistan;