import React, { useState } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import { SocialSourceData } from "../../CommonData/Data/index";
import DonutChart from "../AllCharts/apex/dountchart";

const SectorsAnalytics = () => {

  const years = {
    'all': [550, 475, 450, 430, 380],
    '2025': [600, 520, 480, 450, 400],
    '2024': [550, 475, 450, 430, 380],
    '2023': [500, 425, 400, 380, 350],
    '2022': [450, 375, 350, 330, 300],
    '2021': [400, 325, 300, 280, 250],
    '2020': [350, 275, 250, 230, 200]
  };

  const [selectedYear, setSelectedYear] = useState('all');
  const [chartData, setChartData] = useState(years['all']);

  const handleYearChange = (e) => {
    const year = e.target.value;
    setSelectedYear(year);
    setChartData(years[year]);
  };

  console.log(chartData)

  return (
    <React.Fragment>
       <Col xl={4}>
        <Card>
          <CardBody>
            <div className="d-flex align-items-center">
              <div className="flex-grow-1">
                <h5 className="card-title">Sectors</h5>
              </div>
              <div className="flex-shrink-0">
                <select className="form-select form-select-sm mb-0 my-n1">
                  <option value="all">All</option>
                  {["2025", "2024", "2023", "2022", "2021", "2020"].map((item, key) => (
                    <option key={key} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <DonutChart />

          </CardBody>
        </Card>
      </Col>

    </React.Fragment>
  );
};

export default SectorsAnalytics;