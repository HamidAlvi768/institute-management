import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";

import RadialChart1 from "./userpanelChart1";
import RadialChart2 from "./userpanelChart2";
import RadialChart3 from "./userpanelChart3";
import RadialChart4 from "./userpanelChart4";
import RadialChart5 from "./userpanelChart5";
import RadialChart6 from "./userpanelChart6";
import { useSelector } from "react-redux";


const UserPanel = () => {

  const institutes = {
    'all': {
      'total': 2800,
      'registerd': 2000,
      'not-registerd': 800,
      'affiliates': 25,
      'acreditation': 150,
      'board-registerd': 1200
    },
    'Punjab': {
      'total': 1000,
      'registerd': 800,
      'not-registerd': 200,
      'affiliates': 10,
      'acreditation': 60,
      'board-registerd': 500
    },
    'Sindh': {
      'total': 600,
      'registerd': 450,
      'not-registerd': 150,
      'affiliates': 5,
      'acreditation': 30,
      'board-registerd': 250
    },
    'KPK': {
      'total': 400,
      'registerd': 300,
      'not-registerd': 100,
      'affiliates': 3,
      'acreditation': 20,
      'board-registerd': 150
    },
    'Balochistan': {
      'total': 300,
      'registerd': 200,
      'not-registerd': 100,
      'affiliates': 2,
      'acreditation': 15,
      'board-registerd': 100
    },
    'GB': {
      'total': 200,
      'registerd': 100,
      'not-registerd': 100,
      'affiliates': 2,
      'acreditation': 10,
      'board-registerd': 100
    },
    'Federal': {
      'total': 300,
      'registerd': 150,
      'not-registerd': 150,
      'affiliates': 3,
      'acreditation': 15,
      'board-registerd': 100
    }
  }

  const selectedProvince = useSelector((state) => state.province.selectedProvince);

  console.log(institutes[selectedProvince ?? 'all']['total']);
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
                  <h5 className="mb-3 st-card-num">{institutes[selectedProvince ?? 'all']['board-registerd']}</h5>
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
    </React.Fragment >
  );
};

export default UserPanel;
