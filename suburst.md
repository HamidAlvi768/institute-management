import React, { useRef, useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highchartsMore from 'highcharts/highcharts-more';
import sunburst from 'highcharts/modules/sunburst';
import exporting from 'highcharts/modules/exporting';
import exportData from 'highcharts/modules/export-data';
import {
    Card,
    CardBody,
    Col,
    Row
} from "reactstrap";

// Initialize Highcharts modules
if (typeof Highcharts === 'object') {
  highchartsMore(Highcharts);
  sunburst(Highcharts);
  exporting(Highcharts);
  exportData(Highcharts);
}

// Define the MapPakistan component using Highcharts
const MapPakistan = () => {
  const chartComponentRef = useRef(null);
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    // Data structure for Pakistan's hierarchical structure
    const data = [{
      id: '0.0',
      parent: '',
      name: 'Pakistan'
    }, 
    // First layer: Provincial and Federal
    {
      id: '1.1',
      parent: '0.0',
      name: 'Provincial'
    }, {
      id: '1.2',
      parent: '0.0',
      name: 'Federal'
    },
    
    // Provincial Path - Provinces
    {
      id: '2.1',
      parent: '1.1',
      name: 'Punjab'
    }, {
      id: '2.2',
      parent: '1.1',
      name: 'Sindh'
    }, {
      id: '2.3',
      parent: '1.1',
      name: 'KPK'
    }, {
      id: '2.4',
      parent: '1.1',
      name: 'Balochistan'
    },
    
    // Federal Path - Ministries
    {
      id: '2.5',
      parent: '1.2',
      name: 'Federal Education'
    }, {
      id: '2.6',
      parent: '1.2',
      name: 'Science & Technology'
    }, {
      id: '2.7',
      parent: '1.2',
      name: 'Defense'
    },
    
    // Punjab Departments
    {
      id: '3.1',
      parent: '2.1',
      name: 'Education'
    }, {
      id: '3.2',
      parent: '2.1',
      name: 'Technical'
    }, {
      id: '3.3',
      parent: '2.1',
      name: 'Health'
    },
    
    // Sindh Departments
    {
      id: '3.4',
      parent: '2.2',
      name: 'Education'
    }, {
      id: '3.5',
      parent: '2.2',
      name: 'Technical'
    },
    
    // KPK Departments
    {
      id: '3.6',
      parent: '2.3',
      name: 'Education'
    }, {
      id: '3.7',
      parent: '2.3',
      name: 'Technical'
    },
    
    // Balochistan Departments
    {
      id: '3.8',
      parent: '2.4',
      name: 'Education'
    }, {
      id: '3.9',
      parent: '2.4',
      name: 'Technical'
    },
    
    // Federal Education Departments
    {
      id: '3.10',
      parent: '2.5',
      name: 'Higher Education'
    }, {
      id: '3.11',
      parent: '2.5',
      name: 'Technical Education'
    },
    
    // Science & Technology Departments
    {
      id: '3.12',
      parent: '2.6',
      name: 'Research'
    }, {
      id: '3.13',
      parent: '2.6',
      name: 'Development'
    },
    
    // Defense Departments
    {
      id: '3.14',
      parent: '2.7',
      name: 'Military Education'
    }, {
      id: '3.15',
      parent: '2.7',
      name: 'Defense Production'
    },
    
    // Punjab Education Institutes
    {
      id: '4.1',
      parent: '3.1',
      name: 'University of Punjab',
      value: 3
    }, {
      id: '4.2',
      parent: '3.1',
      name: 'Government College University',
      value: 2
    }, {
      id: '4.3',
      parent: '3.1',
      name: 'Lahore College for Women',
      value: 2
    },
    
    // Punjab Technical Institutes
    {
      id: '4.4',
      parent: '3.2',
      name: 'UET Lahore',
      value: 3
    }, {
      id: '4.5',
      parent: '3.2',
      name: 'UET Taxila',
      value: 2
    }, {
      id: '4.6',
      parent: '3.2',
      name: 'NUST Islamabad',
      value: 2
    },
    
    // Punjab Health Institutes
    {
      id: '4.7',
      parent: '3.3',
      name: 'King Edward Medical University',
      value: 3
    }, {
      id: '4.8',
      parent: '3.3',
      name: 'Allama Iqbal Medical College',
      value: 2
    }, {
      id: '4.9',
      parent: '3.3',
      name: 'Punjab Medical College',
      value: 2
    },
    
    // Sindh Education Institutes
    {
      id: '4.10',
      parent: '3.4',
      name: 'University of Karachi',
      value: 3
    }, {
      id: '4.11',
      parent: '3.4',
      name: 'University of Sindh',
      value: 2
    }, {
      id: '4.12',
      parent: '3.4',
      name: 'Shah Abdul Latif University',
      value: 2
    },
    
    // Sindh Technical Institutes
    {
      id: '4.13',
      parent: '3.5',
      name: 'NED University',
      value: 3
    }, {
      id: '4.14',
      parent: '3.5',
      name: 'Mehran University',
      value: 2
    }, {
      id: '4.15',
      parent: '3.5',
      name: 'Dawood University',
      value: 2
    },
    
    // KPK Education Institutes
    {
      id: '4.16',
      parent: '3.6',
      name: 'University of Peshawar',
      value: 3
    }, {
      id: '4.17',
      parent: '3.6',
      name: 'Islamia College',
      value: 2
    },
    
    // KPK Technical Institutes
    {
      id: '4.18',
      parent: '3.7',
      name: 'UET Peshawar',
      value: 2
    }, {
      id: '4.19',
      parent: '3.7',
      name: 'CECOS University',
      value: 2
    },
    
    // Balochistan Education Institutes
    {
      id: '4.20',
      parent: '3.8',
      name: 'University of Balochistan',
      value: 3
    }, {
      id: '4.21',
      parent: '3.8',
      name: 'LUAWMS',
      value: 2
    },
    
    // Balochistan Technical Institutes
    {
      id: '4.22',
      parent: '3.9',
      name: 'BUITEMS',
      value: 3
    }, {
      id: '4.23',
      parent: '3.9',
      name: 'SBK Women University',
      value: 2
    },
    
    // Federal Higher Education Institutes
    {
      id: '4.24',
      parent: '3.10',
      name: 'HEC',
      value: 3
    }, {
      id: '4.25',
      parent: '3.10',
      name: 'Quaid-i-Azam University',
      value: 2
    }, {
      id: '4.26',
      parent: '3.10',
      name: 'COMSATS',
      value: 2
    },
    
    // Federal Technical Education Institutes
    {
      id: '4.27',
      parent: '3.11',
      name: 'NAVTTC',
      value: 3
    }, {
      id: '4.28',
      parent: '3.11',
      name: 'TEVTA',
      value: 2
    },
    
    // Science & Technology Research Institutes
    {
      id: '4.29',
      parent: '3.12',
      name: 'PCSIR',
      value: 3
    }, {
      id: '4.30',
      parent: '3.12',
      name: 'PARC',
      value: 2
    }, {
      id: '4.31',
      parent: '3.12',
      name: 'SUPARCO',
      value: 2
    },
    
    // Science & Technology Development Institutes
    {
      id: '4.32',
      parent: '3.13',
      name: 'Pakistan Council for Science & Tech',
      value: 3
    }, {
      id: '4.33',
      parent: '3.13',
      name: 'National Institute of Electronics',
      value: 2
    },
    
    // Defense Military Education Institutes
    {
      id: '4.34',
      parent: '3.14',
      name: 'NDU',
      value: 3
    }, {
      id: '4.35',
      parent: '3.14',
      name: 'PMA Kakul',
      value: 2
    }, {
      id: '4.36',
      parent: '3.14',
      name: 'PAF Academy',
      value: 2
    },
    
    // Defense Production Institutes
    {
      id: '4.37',
      parent: '3.15',
      name: 'Heavy Industries Taxila',
      value: 3
    }, {
      id: '4.38',
      parent: '3.15',
      name: 'Pakistan Ordnance Factories',
      value: 2
    }];

    // Configure Highcharts options
    const options = {
      chart: {
        height: '100%'
      },
      title: {
        text: 'Pakistan Hierarchical Structure'
      },
      subtitle: {
        text: 'Click to drill down and explore'
      },
      credits: {
        enabled: false
      },
      series: [{
        type: 'sunburst',
        data: data,
        allowDrillToNode: true,
        cursor: 'pointer',
        dataLabels: {
          format: '{point.name}',
          filter: {
            property: 'innerArcLength',
            operator: '>',
            value: 16
          },
          style: {
            textOutline: false
          }
        },
        levels: [{
          level: 1,
          levelIsConstant: false,
          dataLabels: {
            filter: {
              property: 'outerArcLength',
              operator: '>',
              value: 64
            }
          }
        }, {
          level: 2,
          colorByPoint: true
        },
        {
          level: 3,
          colorVariation: {
            key: 'brightness',
            to: -0.5
          }
        }, {
          level: 4,
          colorVariation: {
            key: 'brightness',
            to: 0.5
          }
        }]
      }],
      tooltip: {
        headerFormat: '',
        pointFormat: '<b>{point.name}</b>'
      },
      responsive: {
        rules: [{
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            chart: {
              height: 600
            }
          }
        }]
      }
    };
    
    setChartOptions(options);
  }, []);

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={chartOptions}
        ref={chartComponentRef}
        containerProps={{ style: { height: '500px' } }}
      />
    </div>
  );
};

// Creating the Overview component to use MapPakistan
import LineColumnArea from './LineColumnArea';

const OverView = () => {
    // const dispatch=useDispatch();
    const [selectedRegion, setSelectedRegion] = React.useState('ALL');
    return (
        <React.Fragment>
            <Card>
                <CardBody>
                    <div className="d-flex justify-between align-items-center">
                        <div className="flex-grow-1">
                            <h5 className="card-title">Map</h5>
                        </div>
                        <div className="flex-shrink-0">
                        </div>
                    </div>
                    <div>
                        <MapPakistan />
                    </div>
                </CardBody>
            </Card>
        </React.Fragment>
    );
};

export default OverView;