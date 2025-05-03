import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";

import RadialChart1 from "./userpanelChart1";
import RadialChart2 from "./userpanelChart2";
import RadialChart3 from "./userpanelChart3";

const UserPanel = () => {
  return (
    <React.Fragment>
      <Row>
        <Col xl={2} sm={6}>
          <Card>
            <CardBody>
              <div className="d-flex text-muted">
                <div className="flex-shrink-0 me-3 align-self-center">
                  <div className="avatar-sm">
                    <div className="avatar-title bg-light text-primary font-size-20">
                      <i className="ri-building-line"></i>
                    </div>
                  </div>
                </div>
                <div className="flex-grow-1 overflow-hidden">
                  <p className="mb-1 st-card-title">Institutes</p>
                  <h5 className="mb-3 st-card-num">300</h5>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xl={2} sm={6}>
          <Card>
            <CardBody>
              <div className="d-flex text-muted">
                <div className="flex-shrink-0 me-3 align-self-center">
                  <div className="avatar-sm">
                    <div className="avatar-title bg-light text-primary font-size-20">
                      <i className="ri-government-line"></i>
                    </div>
                  </div>
                </div>
                <div className="flex-grow-1 overflow-hidden">
                  <p className="mb-1 st-card-title">NAVTTC Registerd</p>
                  <h5 className="mb-3 st-card-num">500</h5>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xl={2} sm={6}>
          <Card>
            <CardBody>
              <div className="d-flex text-muted">
                <div className="flex-shrink-0 me-3 align-self-center">
                  <div className="avatar-sm">
                    <div className="avatar-title bg-light text-primary font-size-20">
                      <i className="ri-shield-star-line"></i>
                    </div>
                  </div>
                </div>
                <div className="flex-grow-1 overflow-hidden">
                  <p className="mb-1 st-card-title">Board Registered</p>
                  <h5 className="mb-3 st-card-num">435</h5>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col xl={2} sm={6}>
          <Card>
            <CardBody>
              <div className="d-flex text-muted">
                <div className="flex-shrink-0 me-3 align-self-center">
                  <div className="avatar-sm">
                    <div className="avatar-title bg-light text-primary font-size-20">
                      <i className="ri-team-line"></i>
                    </div>
                  </div>
                </div>
                <div className="flex-grow-1 overflow-hidden">
                  <p className="mb-1 st-card-title">Acreditation</p>
                  <h5 className="mb-3 st-card-num">435</h5>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xl={2} sm={6}>
          <Card>
            <CardBody>
              <div className="d-flex text-muted">
                <div className="flex-shrink-0 me-3 align-self-center">
                  <div className="avatar-sm">
                    <div className="avatar-title bg-light text-primary font-size-20">
                      <i className="ri-team-line"></i>
                    </div>
                  </div>
                </div>
                <div className="flex-grow-1 overflow-hidden">
                  <p className="mb-1 st-card-title">Not Registerd</p>
                  <h5 className="mb-3 st-card-num">435</h5>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xl={2} sm={6}>
          <Card>
            <CardBody>
              <div className="d-flex text-muted">
                <div className="flex-shrink-0 me-3 align-self-center">
                  <div className="avatar-sm">
                    <div className="avatar-title bg-light text-primary font-size-20">
                      <i className="ri-team-line"></i>
                    </div>
                  </div>
                </div>
                <div className="flex-grow-1 overflow-hidden">
                  <p className="mb-1 st-card-title">Affiliates</p>
                  <h5 className="mb-3 st-card-num">435</h5>
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
