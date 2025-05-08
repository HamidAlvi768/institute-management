import React, { useRef, useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import Sunburst from 'highcharts/modules/sunburst';
import Exporting from 'highcharts/modules/exporting';
import ExportData from 'highcharts/modules/export-data';
import HighchartsReact from 'highcharts-react-official';

// Robustly initialize Highcharts modules
function initModule(mod, Highcharts) {
  if (typeof mod === 'function') {
    mod(Highcharts);
  } else if (mod && typeof mod.default === 'function') {
    mod.default(Highcharts);
  }
}

if (typeof Highcharts === 'object') {
  initModule(Sunburst, Highcharts);
  initModule(Exporting, Highcharts);
  initModule(ExportData, Highcharts);
}

const SunburstPakistan = () => {
  const chartComponentRef = useRef(null);
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    // Data structure for Pakistan's hierarchical structure
    const data = [
      { id: '0.0', parent: '', name: 'Pakistan' },
      { id: '1.2', parent: '0.0', name: 'Federal' },
      { id: '2.1', parent: '0.0', name: 'Punjab' },
      { id: '2.2', parent: '0.0', name: 'Sindh' },
      { id: '2.3', parent: '0.0', name: 'KPK' },
      { id: '2.4', parent: '0.0', name: 'Balochistan' },
      { id: '2.5', parent: '1.2', name: 'Federal Education' },
      { id: '2.6', parent: '1.2', name: 'Science & Technology' },
      { id: '2.7', parent: '1.2', name: 'Defense' },
      { id: '3.1', parent: '2.1', name: 'Education' },
      { id: '3.2', parent: '2.1', name: 'Technical' },
      { id: '3.3', parent: '2.1', name: 'Health' },
      { id: '3.4', parent: '2.2', name: 'Education' },
      { id: '3.5', parent: '2.2', name: 'Technical' },
      { id: '3.6', parent: '2.3', name: 'Education' },
      { id: '3.7', parent: '2.3', name: 'Technical' },
      { id: '3.8', parent: '2.4', name: 'Education' },
      { id: '3.9', parent: '2.4', name: 'Technical' },
      { id: '3.10', parent: '2.5', name: 'Higher Education' },
      { id: '3.11', parent: '2.5', name: 'Technical Education' },
      { id: '3.12', parent: '2.6', name: 'Research' },
      { id: '3.13', parent: '2.6', name: 'Development' },
      { id: '3.14', parent: '2.7', name: 'Military Education' },
      { id: '3.15', parent: '2.7', name: 'Defense Production' },
      { id: '4.1', parent: '3.1', name: 'Institutes: 100', value: 100 },
      { id: '4.2', parent: '3.2', name: 'Institutes: 100', value: 100 },
      { id: '4.3', parent: '3.3', name: 'Institutes: 100', value: 100 },
      { id: '4.4', parent: '3.4', name: 'Institutes: 100', value: 100 },
      { id: '4.5', parent: '3.5', name: 'Institutes: 100', value: 100 },
      { id: '4.6', parent: '3.6', name: 'Institutes: 100', value: 100 },
      { id: '4.7', parent: '3.7', name: 'Institutes: 100', value: 100 },
      { id: '4.8', parent: '3.8', name: 'Institutes: 100', value: 100 },
      { id: '4.9', parent: '3.9', name: 'Institutes: 100', value: 100 },
      { id: '4.10', parent: '3.10', name: 'Institutes: 100', value: 100 },
      { id: '4.11', parent: '3.11', name: 'Institutes: 100', value: 100 },
      { id: '4.12', parent: '3.12', name: 'Institutes: 100', value: 100 },
      { id: '4.13', parent: '3.13', name: 'Institutes: 100', value: 100 },
      { id: '4.14', parent: '3.14', name: 'Institutes: 100', value: 100 },
      { id: '4.15', parent: '3.15', name: 'Institutes: 100', value: 100 }
    ];

    const options = {
      chart: {
        height: 600,
        width: null
      },
      title: { text: 'Pakistan Hierarchical Structure' },
      subtitle: { text: 'Click to drill down and explore' },
      credits: { enabled: false },
      series: [{
        type: 'sunburst',
        data: data,
        allowDrillToNode: true,
        cursor: 'pointer',
        dataLabels: {
          format: '{point.name}',
          filter: { property: 'innerArcLength', operator: '>', value: 16 },
          style: { textOutline: false }
        },
        levels: [
          {
            level: 1,
            levelIsConstant: false,
            dataLabels: {
              align: 'center',
              verticalAlign: 'middle',
              style: {
                fontWeight: 'bold',
                fontSize: '12px',
                textOutline: false
              },
              filter: {
                property: 'outerArcLength',
                operator: '>',
                value: 64
              }
            }
          },
          { level: 2, colorByPoint: true },
          { level: 3, colorVariation: { key: 'brightness', to: -0.5 } },
          { level: 4, colorVariation: { key: 'brightness', to: 0.5 } }
        ]
      }],
      tooltip: { headerFormat: '', pointFormat: '<b>{point.name}</b>' },
      responsive: {
        rules: [{
          condition: { maxWidth: 500 },
          chartOptions: { chart: { height: 300 } }
        }]
      }
    };

    setChartOptions(options);
  }, []);

  return (
    <div style={{ width: '100%', margin: '0 auto' }}>
      <HighchartsReact
        highcharts={Highcharts}
        options={chartOptions}
        ref={chartComponentRef}
        containerProps={{ style: { width: '100%' } }}
      />
    </div>
  );
};

export default SunburstPakistan; 