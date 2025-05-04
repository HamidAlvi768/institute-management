import React from "react";
import { Card, CardBody, CardTitle, Col } from "reactstrap";
import AffiliationBodyChart from "../AllCharts/apex/AffiliationBodyChart";

const AffiliationBodiesChart = ({ columnSize = 6 }) => {
  return (
    <React.Fragment>
      <Col xl={columnSize}>
        <Card>
          <CardBody>
            <CardTitle className="mb-4">
              Affiliation Bodies by Provinces
            </CardTitle>
            <AffiliationBodyChart />
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default AffiliationBodiesChart;
