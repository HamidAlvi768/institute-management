import React from "react";
import { Card, CardBody, CardTitle, Col } from "reactstrap";
import AffiliationBodyChart from "../AllCharts/apex/AffiliationBodyChart";

const AffiliationBodiesChart = () => {
  return (
    <React.Fragment>
      <Col xl={12}>
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
