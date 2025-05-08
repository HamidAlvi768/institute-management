import React from 'react';
import ReactApexChart from "react-apexcharts";
import {
    Card,
    CardBody,
    Col,
} from "reactstrap";

import { Link } from 'react-router-dom';


const RevenueByLocation = ({ cardClassName = "" }) => {
    // Trainers data for spline area chart
    const series = [
        {
            name: "Total Trainers",
            data: [50, 52, 54, 53, 55, 56, 57],
        },
        {
            name: "Permanent",
            data: [30, 31, 32, 32, 33, 34, 34],
        },
        {
            name: "Visiting",
            data: [20, 21, 22, 21, 22, 22, 23],
        },
    ];
    const options = {
        chart: {
            toolbar: { show: false },
            zoom: { enabled: false },
        },
        legend: { show: false },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
            width: 3,
        },
        colors: ["#3d8ef8", "#11c46e", "#f46a6a"],
        xaxis: {
            type: "category",
            categories: [
                "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"
            ],
        },
        grid: {
            borderColor: "#f1f1f1",
        },
        tooltip: {
            x: {
                format: "MMM",
            },
        },
    };
    return (
        <React.Fragment>
            <Col lg={4}>
                <Card className={cardClassName} style={cardClassName === 'transparent-card' ? { background: 'transparent', boxShadow: 'none' } : {}}>
                    <CardBody>
                        <h5 className="card-title mb-3">Trainers</h5>
                        <div style={{ height: "226px" }}>
                            <ReactApexChart
                                options={options}
                                series={series}
                                type="area"
                                height={200}
                                className="apex-charts"
                            />
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default RevenueByLocation;