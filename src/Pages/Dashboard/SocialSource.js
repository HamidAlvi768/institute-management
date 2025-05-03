import React from "react";
import RadialChart from "./RadialChart";
import { Card, CardBody, Col, Row } from "reactstrap";
import { SocialSourceData } from "../../CommonData/Data/index";
import BarChart from "../AllCharts/apex/barchart";
import DonutChart from "../AllCharts/apex/dountchart";

const SocialSource = () => {
  return (
    <React.Fragment>
      <Col xl={4}>
        <Card>
          <CardBody>
            <div className="d-flex align-items-center">
              <div className="flex-grow-1">
                <h5 className="card-title">Institute Analysis</h5>
              </div>
              <div className="flex-shrink-0">
                <select className="form-select form-select-sm mb-0 my-n1">
                  {["2023", "2022", "2021", "2020", "2019"].map((item, key) => (
                    <option key={key} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <BarChart />

          </CardBody>
        </Card>
      </Col>

      <Col xl={4}>
        <Card>
          <CardBody>
            <div className="d-flex align-items-center">
              <div className="flex-grow-1">
                <h5 className="card-title">Sectors</h5>
              </div>
              <div className="flex-shrink-0">
                <select className="form-select form-select-sm mb-0 my-n1">
                  {["2023", "2022", "2021", "2020", "2019"].map((item, key) => (
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

export default SocialSource;