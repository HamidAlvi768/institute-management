import React, { useState } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import { SocialSourceData } from "../../CommonData/Data/index";
import SectorsBarChart from "../AllCharts/apex/sectorsBarChart";

const SectorsAnalytics = ({ columnSize = 12 }) => {

  const years = {
    'all': {
      IT: [45, 32, 28, 21],
      Healthcare: [38, 25, 22, 15],
      Finance: [30, 20, 18, 12],
      Manufacturing: [25, 18, 15, 10]
    },
    '2025': {
      IT: [50, 35, 30, 24],
      Healthcare: [42, 28, 25, 18],
      Finance: [33, 23, 20, 14],
      Manufacturing: [28, 20, 17, 12]
    },
    '2024': {
      IT: [45, 32, 28, 21],
      Healthcare: [38, 25, 22, 15],
      Finance: [30, 20, 18, 12],
      Manufacturing: [25, 18, 15, 10]
    },
    '2023': {
      IT: [40, 28, 25, 18],
      Healthcare: [34, 22, 19, 13],
      Finance: [27, 18, 16, 10],
      Manufacturing: [22, 15, 12, 8]
    },
    '2022': {
      IT: [35, 25, 22, 15],
      Healthcare: [30, 19, 16, 11],
      Finance: [24, 15, 13, 8],
      Manufacturing: [19, 13, 10, 6]
    },
    '2021': {
      IT: [30, 22, 19, 12],
      Healthcare: [26, 16, 13, 9],
      Finance: [21, 13, 11, 7],
      Manufacturing: [16, 11, 8, 5]
    },
    '2020': {
      IT: [25, 18, 15, 10],
      Healthcare: [22, 14, 11, 7],
      Finance: [18, 11, 9, 5],
      Manufacturing: [13, 9, 6, 3]
    }
  };

  const [selectedYear, setSelectedYear] = useState('all');
  const [chartData, setChartData] = useState(years['all']);

  const handleYearChange = (e) => {
    const year = e.target.value;
    setSelectedYear(year);
    setChartData(years[year]);
  };

  return (
    <React.Fragment>
      <Col xl={columnSize}>
        <Card>
          <CardBody>
            <div className="d-flex align-items-center">
              <div className="flex-grow-1">
                <h5 className="card-title">Sectors by Provinces</h5>
              </div>
              <div className="flex-shrink-0">
                <select
                  className="form-select form-select-sm mb-0 my-n1"
                  onChange={handleYearChange}
                  value={selectedYear}
                >
                  <option value="all">All</option>
                  {["2025", "2024", "2023", "2022", "2021", "2020"].map((item, key) => (
                    <option key={key} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <SectorsBarChart yearData={chartData} />

          </CardBody>
        </Card>
      </Col>

    </React.Fragment>
  );
};

export default SectorsAnalytics;