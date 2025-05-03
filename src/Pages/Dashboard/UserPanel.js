import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";

import RadialChart1 from "./userpanelChart1";
import RadialChart2 from "./userpanelChart2";
import RadialChart3 from "./userpanelChart3";
import RadialChart4 from "./userpanelChart4";
import RadialChart5 from "./userpanelChart5";
import RadialChart6 from "./userpanelChart6";

const UserPanel = () => {

  const institutes = {
    'total': 700,
    'registerd': 550,
    'not-registerd': 200,
    'affiliates': 5,
    'acreditation': 30,
    'board-registerd': 300
  }


  return (
    <React.Fragment>
      <Row>
        <Col xl={2} sm={6}>
          <Card>
            <CardBody>
              <div className="d-flex">
                <div className="flex-shrink-0 me-3 align-self-center">
                  <RadialChart4 />
                </div>
                <div className="flex-grow-1 overflow-hidden">
                  <p className="mb-1 st-card-title">Institutes</p>
                  <h5 className="mb-3 st-card-num">{institutes['total']}</h5>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xl={2} sm={6}>
          <Card>
            <CardBody>
              <div className="d-flex">
                <div className="flex-shrink-0 me-3 align-self-center">
                  <RadialChart1 />
                </div>
                <div className="flex-grow-1 overflow-hidden">
                  <p className="mb-1 st-card-title">NAVTTC Registerd</p>
                  <h5 className="mb-3 st-card-num">{institutes['registerd']}</h5>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xl={2} sm={6}>
          <Card>
            <CardBody>
              <div className="d-flex">
                <div className="flex-shrink-0 me-3 align-self-center">
                  <RadialChart2 />
                </div>
                <div className="flex-grow-1 overflow-hidden">
                  <p className="mb-1 st-card-title">Board Registered</p>
                  <h5 className="mb-3 st-card-num">{institutes['board-registerd']}</h5>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col xl={2} sm={6}>
          <Card>
            <CardBody>
              <div className="d-flex">
                <div className="flex-shrink-0 me-3 align-self-center">
                  <RadialChart3 />
                </div>
                <div className="flex-grow-1 overflow-hidden">
                  <p className="mb-1 st-card-title">Acreditation</p>
                  <h5 className="mb-3 st-card-num">{institutes['acreditation']}</h5>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xl={2} sm={6}>
          <Card>
            <CardBody>
              <div className="d-flex">
                <div className="flex-shrink-0 me-3 align-self-center">
                  <RadialChart5 />
                </div>
                <div className="flex-grow-1 overflow-hidden">
                  <p className="mb-1 st-card-title">Not Registerd</p>
                  <h5 className="mb-3 st-card-num">{institutes['not-registerd']}</h5>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xl={2} sm={6}>
          <Card>
            <CardBody>
              <div className="d-flex">
                <div className="flex-shrink-0 me-3 align-self-center">
                  <RadialChart6 />
                </div>
                <div className="flex-grow-1 overflow-hidden">
                  <p className="mb-1 st-card-title">Affiliates</p>
                  <h5 className="mb-3 st-card-num">{institutes['affiliates']}</h5>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default UserPanel;
