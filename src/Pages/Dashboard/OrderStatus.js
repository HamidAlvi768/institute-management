import React from 'react';
import {
    Card,
    CardBody,
    CardTitle,
    Col,
    Row,
} from "reactstrap";
import ReactApexChart from "react-apexcharts";

import { OrderStatusData } from '../../CommonData/Data/index';


const OrderStatus = ({ cardClassName = "" }) => {
    // Prepare data for the pie chart (Course Metrics)
    const pieSeries = [120, 90, 15];
    const pieLabels = ['Total Courses', 'Accredited', 'Expiring Soon'];
    const pieColors = ['#3d8ef8', '#11c46e', '#f46a6a'];
    const pieOptions = {
        labels: pieLabels,
        colors: pieColors,
        legend: {
            show: false,
            position: "bottom",
            horizontalAlign: "center",
            verticalAlign: "middle",
            floating: false,
            fontSize: "14px",
            offsetX: 0,
            offsetY: -10,
        },
        responsive: [
            {
                breakpoint: 600,
                options: {
                    chart: {
                        height: 240,
                    },
                    legend: {
                        show: false,
                    },
                },
            },
        ],
    };
    return (
        <React.Fragment>
            <Col xl={4}>
                <Card className={cardClassName} style={cardClassName === 'transparent-card' ? { background: 'transparent', boxShadow: 'none' } : {}}>
                    <CardBody>
                        <CardTitle>Course Type</CardTitle>
                        <div className="mb-4">
                            <ReactApexChart
                                options={pieOptions}
                                series={pieSeries}
                                type="pie"
                                height="320"
                                className="apex-charts"
                            />
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    )
}

export default OrderStatus;