import React from 'react';
import { Card, CardBody } from 'reactstrap';
import ReactApexChart from 'react-apexcharts';

const TrainingsByFundingChart = () => {
    const options = {
        chart: { 
            type: 'bar', 
            fontFamily: 'inherit', 
            toolbar: { show: false }, 
            height: 350 
        },
        plotOptions: { 
            bar: { 
                horizontal: false, 
                columnWidth: '40%', 
                borderRadius: 4 
            } 
        },
        dataLabels: { enabled: false },
        xaxis: { 
            categories: ['CBT', 'Conventional', 'Trained Teachers', 'Curriculum Development'], 
            labels: { style: { fontSize: '9px' } } 
        },
        yaxis: { 
            title: { 
                text: 'No. Of Trainings', 
                style: { fontSize: '12px' } 
            }, 
            labels: { style: { fontSize: '10px' } } 
        },
        legend: { 
            position: 'bottom', 
            fontSize: '11px', 
            horizontalAlign: 'center', 
            itemMargin: { horizontal: 8, vertical: 2 } 
        },
        colors: ['#1b5642', '#a9cd98', '#f1b44c', '#f46a6a', '#34c38f'],
        tooltip: { enabled: true }
    };

    const series = [
        { name: 'ADB', data: [120, 110, 100, 90] },
        { name: 'GIR', data: [100, 90, 80, 70] },
        { name: 'UNHCR', data: [90, 80, 70, 60] },
        { name: 'JICA', data: [80, 70, 60, 50] },
        { name: 'TICA', data: [70, 60, 50, 40] }
    ];

    return (
        <Card className="h-100">
            <CardBody style={{ padding: '0.75rem' }}>
                <h6 className="mb-2" style={{ fontSize: '11px', fontWeight: '600', color: '#333' }}>No. Of Trainings by Funding Body & Type</h6>
                <ReactApexChart
                    options={options}
                    series={series}
                    type="bar"
                    height={350}
                />
            </CardBody>
        </Card>
    );
};

export default TrainingsByFundingChart; 