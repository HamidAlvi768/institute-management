import React from 'react';
import { Card, CardBody } from 'reactstrap';
import ReactApexChart from 'react-apexcharts';

const ProgramsByRegionChart = () => {
    const options = {
        chart: { type: 'pie', fontFamily: 'inherit' },
        labels: ['Federal', 'Punjab', 'Sindh', 'Balochistan', 'KPK', 'AJK'],
        colors: ['#1b5642', '#a9cd98', '#f1b44c', '#f46a6a', '#34c38f', '#556ee6'],
        legend: { 
            position: 'bottom', 
            fontSize: '10px', 
            horizontalAlign: 'center', 
            itemMargin: { horizontal: 5, vertical: 0 } 
        },
        dataLabels: { 
            enabled: true, 
            style: { 
                fontSize: '8px', 
                fontWeight: '400', 
                colors: ['#fff'] 
            }, 
            dropShadow: { enabled: false } 
        },
        plotOptions: { 
            pie: { 
                donut: { size: '0%' } 
            } 
        }
    };

    const series = [20, 30, 20, 10, 15, 5];

    return (
        <Card className="h-100">
            <CardBody style={{ padding: '0.75rem' }}>
                <h6 className="mb-2" style={{ fontSize: '11px', fontWeight: '600', color: '#333' }}>Programs by Region</h6>
                <ReactApexChart
                    options={options}
                    series={series}
                    type="pie"
                    height={350}
                />
            </CardBody>
        </Card>
    );
};

export default ProgramsByRegionChart; 