import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import RadialChart1 from "./userpanelChart1";
import RadialChart2 from "./userpanelChart2";
import RadialChart3 from "./userpanelChart3";
import RadialChart4 from "./userpanelChart4";
import RadialChart5 from "./userpanelChart5";
import RadialChart6 from "./userpanelChart6";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedProvince } from "../../store/provinceActions";

const UserPanel = () => {
  const institutes = {
    'all': {
      'total-institutes': 2800,
      'affiliated': 2000,
      'accrediated': 800,
      'trades': 25,
      'enrollments': 150,
      'certified': 1200
    },
    'Punjab': {
      'total-institutes': 2800,
      'affiliated': 2000,
      'accrediated': 800,
      'trades': 25,
      'enrollments': 150,
      'certified': 1200
    },
    'Sindh': {
      'total-institutes': 2800,
      'affiliated': 2000,
      'accrediated': 800,
      'trades': 25,
      'enrollments': 150,
      'certified': 1200
    },
    'KPK': {
      'total-institutes': 2800,
      'affiliated': 2000,
      'accrediated': 800,
      'trades': 25,
      'enrollments': 150,
      'certified': 1200
    },
    'Balochistan': {
      'total-institutes': 2800,
      'affiliated': 2000,
      'accrediated': 800,
      'trades': 25,
      'enrollments': 150,
      'certified': 1200
    },
    'GB': {
      'total-institutes': 2800,
      'affiliated': 2000,
      'accrediated': 800,
      'trades': 25,
      'enrollments': 150,
      'certified': 1200
    },
    'Federal': {
      'total-institutes': 2800,
      'affiliated': 2000,
      'accrediated': 800,
      'trades': 25,
      'enrollments': 150,
      'certified': 1200
    }
  };

  const selectedProvince = useSelector((state) => state.province.selectedProvince);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <Row>
        <Col xs="12">
          <Card>
            <CardBody style={{ padding: '0.75rem', backgroundColor: '#1b5642', 'border-radius': '5px' }}>
              <div className="d-flex justify-content-between text-white align-items-center">
                <h5 className="m-0 p-0" style={{ fontSize: '1.25rem', color: 'white' }}>{selectedProvince ? (selectedProvince == "GB" ? "Gilgit-Baltistan" : selectedProvince == "all" ? "Pakistan" : selectedProvince) : 'Pakistan'}</h5>
                <select value={selectedProvince ?? 'all'} onChange={(e) => {
                  dispatch(setSelectedProvince(e.target.value))
                }} className="form-select form-select-sm mb-0 my-n1" style={{ 'max-width': 'fit-content' }}>
                  <option value="all">All</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Sindh">Sindh</option>
                  <option value="Balochistan">Balochistan</option>
                  <option value="KPK">KPK</option>
                  <option value="Federal">Federal</option>
                  <option value="GB">Gilgit Biltistan</option>
                </select>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs="6">
          <Card>
            <CardBody style={{ padding: '0.75rem' }}>
              <div className="d-flex">
                <div className="flex-shrink-0 me-2 align-self-center">
                  <RadialChart4 />
                </div>
                <div className="flex-grow-1 overflow-hidden">
                  <p className="mb-1" style={{ fontSize: '0.85rem', fontWeight: '500' }}>Institutes</p>
                  <h5 className="mb-2" style={{ fontSize: '1.25rem' }}>{institutes[selectedProvince ?? 'all']['total-institutes']}</h5>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xs="6">
          <Card>
            <CardBody style={{ padding: '0.75rem' }}>
              <div className="d-flex">
                <div className="flex-shrink-0 me-2 align-self-center">
                  <RadialChart1 />
                </div>
                <div className="flex-grow-1 overflow-hidden">
                  <p className="mb-1" style={{ fontSize: '0.85rem', fontWeight: '500' }}>Affiliated</p>
                  <h5 className="mb-2" style={{ fontSize: '1.25rem' }}>{institutes[selectedProvince ?? 'all']['affiliated']}</h5>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xs="6">
          <Card>
            <CardBody style={{ padding: '0.75rem' }}>
              <div className="d-flex">
                <div className="flex-shrink-0 me-2 align-self-center">
                  <RadialChart2 />
                </div>
                <div className="flex-grow-1 overflow-hidden">
                  <p className="mb-1" style={{ fontSize: '0.85rem', fontWeight: '500' }}>Acreditated</p>
                  <h5 className="mb-2" style={{ fontSize: '1.25rem' }}>{institutes[selectedProvince ?? 'all']['accrediated']}</h5>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xs="6">
          <Card>
            <CardBody style={{ padding: '0.75rem' }}>
              <div className="d-flex">
                <div className="flex-shrink-0 me-2 align-self-center">
                  <RadialChart3 />
                </div>
                <div className="flex-grow-1 overflow-hidden">
                  <p className="mb-1" style={{ fontSize: '0.85rem', fontWeight: '500' }}>Trades</p>
                  <h5 className="mb-2" style={{ fontSize: '1.25rem' }}>{institutes[selectedProvince ?? 'all']['trades']}</h5>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xs="6">
          <Card>
            <CardBody style={{ padding: '0.75rem' }}>
              <div className="d-flex">
                <div className="flex-shrink-0 me-2 align-self-center">
                  <RadialChart5 />
                </div>
                <div className="flex-grow-1 overflow-hidden">
                  <p className="mb-1" style={{ fontSize: '0.85rem', fontWeight: '500' }}>Enrollments</p>
                  <h5 className="mb-2" style={{ fontSize: '1.25rem' }}>{institutes[selectedProvince ?? 'all']['enrollments']}</h5>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xs="6">
          <Card>
            <CardBody style={{ padding: '0.75rem' }}>
              <div className="d-flex">
                <div className="flex-shrink-0 me-2 align-self-center">
                  <RadialChart6 />
                </div>
                <div className="flex-grow-1 overflow-hidden">
                  <p className="mb-1" style={{ fontSize: '0.85rem', fontWeight: '500' }}>Certified</p>
                  <h5 className="mb-2" style={{ fontSize: '1.25rem' }}>{institutes[selectedProvince ?? 'all']['certified']}</h5>
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