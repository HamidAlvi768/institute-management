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


const OrderStatus = () => {
    // Prepare data for the pie chart
    const pieSeries = OrderStatusData.map(item => Number(item.width));
    const pieLabels = OrderStatusData.map(item => item.title);
    const pieColors = OrderStatusData.map(item => {
        // Map color names to hex or rgb if needed, or use Bootstrap color classes
        switch(item.color) {
            case 'success': return 'rgb(17, 196, 110)';
            case 'warning': return '#f1b44c';
            case 'danger': return '#f46a6a';
            default: return '#ccc';
        }
    });
    const pieOptions = {
        labels: pieLabels,
        colors: pieColors,
        legend: {
            show: true,
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
                <Card>
                    <CardBody>
                        <CardTitle>Order Stats</CardTitle>
                        <div className="mb-4">
                            <ReactApexChart
                                options={pieOptions}
                                series={pieSeries}
                                type="pie"
                                height="320"
                                className="apex-charts"
                            />
                        </div>
                        <hr />
                        <div className="text-center">
                            <Row>
                                {OrderStatusData.map((item, key) => (<div key={key} className="col-4">
                                    <div className="mt-2">
                                        <p className="text-muted mb-2"><i className={item.icon}></i> {item.title}</p>
                                        <h5 className="font-size-16 mb-0">{item.width}</h5>
                                    </div>
                                </div>))}
                            </Row>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    )
}

export default OrderStatus;