import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedProvince } from "../../store/provinceActions";
// Import icons from your preferred icon library, for example:
import { FaBuilding, FaIndustry, FaSchool, FaGraduationCap, FaAward, FaTools, FaUserGraduate, FaCertificate } from 'react-icons/fa';

const StatsCards = () => {
  const institutes = {
    'all': {
      'total-institutes': 7000,  // Adjusted total institutes for all
      'affiliated': 5600,        // 80% of total
      'accrediated': 2800,      // 40% of total
      'trades': 35,
      'enrollments': 500000,    // Increased to more realistic number
      'certified': 350000,      // 70% of enrollments
      'government': 4200,       // 60% of total institutes
      'private': 2800          // 40% of total institutes
    },
    'Punjab': {
      'total-institutes': 3000,  // Adjusted for Punjab
      'affiliated': 2400,        // 80% of total
      'accrediated': 1200,      // 40% of total
      'trades': 30,
      'enrollments': 200000,    // Proportional to institutes
      'certified': 140000,      // 70% of enrollments
      'government': 1800,       // 60% of total institutes
      'private': 1200          // 40% of total institutes
    },
    'Sindh': {
      'total-institutes': 1600,
      'affiliated': 1280,
      'accrediated': 640,
      'trades': 25,
      'enrollments': 120000,
      'certified': 84000,
      'government': 960,
      'private': 640
    },
    'KPK': {
      'total-institutes': 1200,
      'affiliated': 960,
      'accrediated': 480,
      'trades': 20,
      'enrollments': 90000,
      'certified': 63000,
      'government': 720,
      'private': 480
    },
    'Balochistan': {
      'total-institutes': 600,
      'affiliated': 480,
      'accrediated': 240,
      'trades': 15,
      'enrollments': 45000,
      'certified': 31500,
      'government': 360,
      'private': 240
    },
    'GB': {
      'total-institutes': 200,
      'affiliated': 160,
      'accrediated': 80,
      'trades': 10,
      'enrollments': 15000,
      'certified': 10500,
      'government': 120,
      'private': 80
    },
    'Federal': {
      'total-institutes': 400,
      'affiliated': 320,
      'accrediated': 160,
      'trades': 20,
      'enrollments': 30000,
      'certified': 21000,
      'government': 240,
      'private': 160
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
                  <FaSchool size={32} color="#1b5642" />
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
                  <FaGraduationCap size={32} color="#1b5642" />
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
                  <FaAward size={32} color="#1b5642" />
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
                  <FaTools size={32} color="#1b5642" />
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
                  <FaUserGraduate size={32} color="#1b5642" />
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
                  <FaCertificate size={32} color="#1b5642" />
                </div>
                <div className="flex-grow-1 overflow-hidden">
                  <p className="mb-1" style={{ fontSize: '0.85rem', fontWeight: '500' }}>Certified</p>
                  <h5 className="mb-2" style={{ fontSize: '1.25rem' }}>{institutes[selectedProvince ?? 'all']['certified']}</h5>
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
                  <FaBuilding size={32} color="#1b5642" /> {/* Changed to building icon */}
                </div>
                <div className="flex-grow-1 overflow-hidden">
                  <p className="mb-1" style={{ fontSize: '0.85rem', fontWeight: '500' }}>Government</p>
                  <h5 className="mb-2" style={{ fontSize: '1.25rem' }}>{institutes[selectedProvince ?? 'all']['government']}</h5>
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
                  <FaIndustry size={32} color="#1b5642" /> {/* Changed to industry icon */}
                </div>
                <div className="flex-grow-1 overflow-hidden">
                  <p className="mb-1" style={{ fontSize: '0.85rem', fontWeight: '500' }}>Private</p>
                  <h5 className="mb-2" style={{ fontSize: '1.25rem' }}>{institutes[selectedProvince ?? 'all']['private']}</h5>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12">
          <Card>
            <CardBody style={{ padding: '1.3rem', backgroundColor: '#1b5642', 'border-radius': '5px', color: 'white' }}>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <FaBuilding size={24} color="white" className="me-2" />
                  <h4 className="mb-0 text-white">{selectedProvince == "Federal" ? 'Ministries' : 'Departments'}</h4>
                </div>
                <h4 className="mb-0 text-white">15</h4>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default StatsCards;
