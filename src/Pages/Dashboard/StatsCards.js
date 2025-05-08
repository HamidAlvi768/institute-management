import React, { useState } from "react";
import { Card, CardBody, Col, Row, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedProvince } from "../../store/provinceActions";
// Import icons from your preferred icon library, for example:
import { FaBuilding, FaIndustry, FaSchool, FaGraduationCap, FaAward, FaTools, FaUserGraduate, FaCertificate } from 'react-icons/fa';
import ReactApexChart from 'react-apexcharts';

const StatsCards = () => {
  const [activeTab, setActiveTab] = useState('0');
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

  // Chart configurations
  const genderChartOptions = {
    chart: { 
      type: 'pie',
      fontFamily: 'inherit'
    },
    labels: ['Male', 'Female', 'Both'],
    colors: ['#1b5642', '#a9cd98', '#f1b44c'],
    legend: { 
      position: 'bottom',
      fontSize: '10px',
      horizontalAlign: 'center',
      itemMargin: {
        horizontal: 5,
        vertical: 0
      }
    },
    responsive: [{
      breakpoint: 480,
      options: { chart: { width: 200 } }
    }],
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '8px',
        fontWeight: '400',
        colors: ['#fff']
      },
     dropShadow: {
        enabled: false
      }
    },
    plotOptions: {
      pie: {
        donut: {
          size: '0%'
        }
      }
    }
  };

  // Registration Bar Chart for Institutes Tab
  const govTotal = institutes[selectedProvince ?? 'all']['government'];
  const privTotal = institutes[selectedProvince ?? 'all']['private'];
  const govRegistered = Math.round(govTotal * 0.8);
  const privRegistered = Math.round(privTotal * 0.8);
  const govUnregistered = govTotal - govRegistered;
  const privUnregistered = privTotal - privRegistered;
  const registrationBarOptions = {
    chart: {
      type: 'bar',
      stacked: false,
      toolbar: { show: false },
      fontFamily: 'inherit',
      height: 180
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '40%',
        borderRadius: 4
      }
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '7px',
        fontWeight: '400',
        colors: ['#333']
      }
    },
    xaxis: {
      categories: ['Government', 'Private'],
      labels: { style: { fontSize: '10px' } }
    },
    yaxis: {
      labels: { style: { fontSize: '10px' } }
    },
    legend: {
      position: 'bottom',
      fontSize: '10px',
      horizontalAlign: 'center',
      itemMargin: { horizontal: 5, vertical: 0 }
    },
    colors: ['#1b5642', '#a9cd98', '#f1b44c']
  };
  const registrationBarSeries = [
    { name: 'Total', data: [govTotal, privTotal] },
    { name: 'Registered', data: [govRegistered, privRegistered] },
    { name: 'Unregistered', data: [govUnregistered, privUnregistered] }
  ];

  const ownershipChartOptions = {
    chart: { 
      type: 'pie',
      fontFamily: 'inherit'
    },
    labels: ['Government', 'Private', 'NGO'],
    colors: ['#1b5642', '#a9cd98', '#f1b44c'],
    legend: { 
      position: 'bottom',
      fontSize: '10px',
      horizontalAlign: 'center',
      itemMargin: {
        horizontal: 5,
        vertical: 0
      }
    },
    responsive: [{
      breakpoint: 480,
      options: { chart: { width: 200 } }
    }],
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '8px',
        fontWeight: '400',
        colors: ['#fff']
      },
      dropShadow: {
        enabled: false
      }
    },
    plotOptions: {
      pie: {
        donut: {
          size: '0%'
        }
      }
    }
  };

  const instituteTypeChartOptions = {
    chart: { 
      type: 'pie',
      fontFamily: 'inherit'
    },
    labels: ['Vocational', 'Technical', 'Professional'],
    colors: ['#1b5642', '#a9cd98', '#f1b44c'],
    legend: { 
      position: 'bottom',
      fontSize: '10px',
      horizontalAlign: 'center',
      itemMargin: {
        horizontal: 5,
        vertical: 0
      }
    },
    responsive: [{
      breakpoint: 480,
      options: { chart: { width: 200 } }
    }],
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '8px',
        fontWeight: '400',
        colors: ['#fff']
      },
      dropShadow: {
        enabled: false
      }
    },
    plotOptions: {
      pie: {
        donut: {
          size: '0%'
        }
      }
    }
  };

  const affiliationChartOptions = {
    chart: { 
      type: 'pie',
      fontFamily: 'inherit'
    },
    labels: ['Affiliated', 'Not Affiliated'],
    colors: ['#1b5642', '#a9cd98'],
    legend: { 
      position: 'bottom',
      fontSize: '10px',
      horizontalAlign: 'center',
      itemMargin: {
        horizontal: 5,
        vertical: 0
      }
    },
    responsive: [{
      breakpoint: 480,
      options: { chart: { width: 200 } }
    }],
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '8px',
        fontWeight: '400',
        colors: ['#fff']
      },
      dropShadow: {
        enabled: false
      }
    },
    plotOptions: {
      pie: {
        donut: {
          size: '0%'
        }
      }
    }
  };

  const accreditationChartOptions = {
    chart: { 
      type: 'pie',
      fontFamily: 'inherit'
    },
    labels: ['Accredited', 'Non-Accredited'],
    colors: ['#1b5642', '#a9cd98'],
    legend: { 
      position: 'bottom',
      fontSize: '10px',
      horizontalAlign: 'center',
      itemMargin: {
        horizontal: 5,
        vertical: 0
      }
    },
    responsive: [{
      breakpoint: 480,
      options: { chart: { width: 200 } }
    }],
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '8px',
        fontWeight: '400',
        colors: ['#fff']
      },
      dropShadow: {
        enabled: false
      }
    },
    plotOptions: {
      pie: {
        donut: {
          size: '0%'
        }
      }
    }
  };

  return (
    <React.Fragment>
      <Row>
        <Col xs="12">
          <Card className="stats-header">
            <CardBody style={{ padding: '0.75rem', backgroundColor: '#1b5642', 'border-radius': '5px' }}>
              <div className="d-flex justify-content-between text-white align-items-center">
                <Nav tabs className="nav-tabs-custom" style={{ borderBottom: 'none', display: 'flex', flexWrap: 'nowrap', whiteSpace: 'nowrap' }}>
                  <NavItem>
                    <NavLink
                      className={activeTab === '0' ? 'active' : ''}
                      onClick={() => setActiveTab('0')}
                      style={{ 
                        color: activeTab === '0' ? '#1b5642' : 'rgba(255, 255, 255, 0.85)',
                        backgroundColor: activeTab === '0' ? 'white' : 'transparent', 
                        border: 'none',
                        borderRadius: '4px 4px 0 0',
                        padding: '4px 6px',
                        fontWeight: activeTab === '0' ? '600' : '400',
                        margin: '0',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        boxShadow: 'none',
                        minWidth: 0,
                        flexShrink: 1,
                        flexGrow: 1,
                        textAlign: 'center',
                        whiteSpace: 'nowrap',
                        maxWidth: '120px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}
                      onMouseOver={(e) => {
                        if (activeTab !== '0') {
                          e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                        }
                      }}
                      onMouseOut={(e) => {
                        if (activeTab !== '0') {
                          e.target.style.backgroundColor = 'transparent';
                        }
                      }}
                    >
                      Summary
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={activeTab === '1' ? 'active' : ''}
                      onClick={() => setActiveTab('1')}
                      style={{ 
                        color: activeTab === '1' ? '#1b5642' : 'rgba(255, 255, 255, 0.85)',
                        backgroundColor: activeTab === '1' ? 'white' : 'transparent', 
                        border: 'none',
                        borderRadius: '4px 4px 0 0',
                        padding: '4px 6px',
                        fontWeight: activeTab === '1' ? '600' : '400',
                        margin: '0',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        boxShadow: 'none',
                        minWidth: 0,
                        flexShrink: 1,
                        flexGrow: 1,
                        textAlign: 'center',
                        whiteSpace: 'nowrap',
                        maxWidth: '120px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}
                      onMouseOver={(e) => {
                        if (activeTab !== '1') {
                          e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                        }
                      }}
                      onMouseOut={(e) => {
                        if (activeTab !== '1') {
                          e.target.style.backgroundColor = 'transparent';
                        }
                      }}
                    >
                      Institutes
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={activeTab === '2' ? 'active' : ''}
                      onClick={() => setActiveTab('2')}
                      style={{ 
                        color: activeTab === '2' ? '#1b5642' : 'rgba(255, 255, 255, 0.85)',
                        backgroundColor: activeTab === '2' ? 'white' : 'transparent', 
                        border: 'none',
                        borderRadius: '4px 4px 0 0',
                        padding: '4px 6px',
                        fontWeight: activeTab === '2' ? '600' : '400',
                        margin: '0',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        boxShadow: 'none',
                        fontSize: '0.95rem',
                        minWidth: 0,
                        flexShrink: 1,
                        flexGrow: 1,
                        textAlign: 'center',
                        whiteSpace: 'nowrap',
                        maxWidth: '120px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}
                      onMouseOver={(e) => {
                        if (activeTab !== '2') {
                          e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                        }
                      }}
                      onMouseOut={(e) => {
                        if (activeTab !== '2') {
                          e.target.style.backgroundColor = 'transparent';
                        }
                      }}
                    >
                      Programs
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={activeTab === '3' ? 'active' : ''}
                      onClick={() => setActiveTab('3')}
                      style={{ 
                        color: activeTab === '3' ? '#1b5642' : 'rgba(255, 255, 255, 0.85)',
                        backgroundColor: activeTab === '3' ? 'white' : 'transparent', 
                        border: 'none',
                        borderRadius: '4px 4px 0 0',
                        padding: '4px 6px',
                        fontWeight: activeTab === '3' ? '600' : '400',
                        margin: '0',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        boxShadow: 'none',
                        minWidth: 0,
                        flexShrink: 1,
                        flexGrow: 1,
                        textAlign: 'center',
                        whiteSpace: 'nowrap',
                        maxWidth: '120px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}
                      onMouseOver={(e) => {
                        if (activeTab !== '3') {
                          e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                        }
                      }}
                      onMouseOut={(e) => {
                        if (activeTab !== '3') {
                          e.target.style.backgroundColor = 'transparent';
                        }
                      }}
                    >
                      Trades
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={activeTab === '4' ? 'active' : ''}
                      onClick={() => setActiveTab('4')}
                      style={{ 
                        color: activeTab === '4' ? '#1b5642' : 'rgba(255, 255, 255, 0.85)',
                        backgroundColor: activeTab === '4' ? 'white' : 'transparent', 
                        border: 'none',
                        borderRadius: '4px 4px 0 0',
                        padding: '4px 6px',
                        fontWeight: activeTab === '4' ? '600' : '400',
                        margin: '0',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        boxShadow: 'none',
                        minWidth: 0,
                        flexShrink: 1,
                        flexGrow: 1,
                        textAlign: 'center',
                        whiteSpace: 'nowrap',
                        maxWidth: '120px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}
                      onMouseOver={(e) => {
                        if (activeTab !== '4') {
                          e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                        }
                      }}
                      onMouseOut={(e) => {
                        if (activeTab !== '4') {
                          e.target.style.backgroundColor = 'transparent';
                        }
                      }}
                    >
                      Enrollments
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={activeTab === '5' ? 'active' : ''}
                      onClick={() => setActiveTab('5')}
                      style={{ 
                        color: activeTab === '5' ? '#1b5642' : 'rgba(255, 255, 255, 0.85)',
                        backgroundColor: activeTab === '5' ? 'white' : 'transparent', 
                        border: 'none',
                        borderRadius: '4px 4px 0 0',
                        padding: '4px 6px',
                        fontWeight: activeTab === '5' ? '600' : '400',
                        margin: '0',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        boxShadow: 'none',
                        minWidth: 0,
                        flexShrink: 1,
                        flexGrow: 1,
                        textAlign: 'center',
                        whiteSpace: 'nowrap',
                        maxWidth: '120px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}
                      onMouseOver={(e) => {
                        if (activeTab !== '5') {
                          e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                        }
                      }}
                      onMouseOut={(e) => {
                        if (activeTab !== '5') {
                          e.target.style.backgroundColor = 'transparent';
                        }
                      }}
                    >
                      Budget
                    </NavLink>
                  </NavItem>
                </Nav>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <TabContent activeTab={activeTab}>
        {/* Tab 0: Summary/Stat Cards */}
        <TabPane tabId="0">
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
                      <FaBuilding size={32} color="#1b5642" />
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
                      <FaIndustry size={32} color="#1b5642" />
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
        </TabPane>

        {/* Tab 1: Institutes */}
        <TabPane tabId="1">
          <Row>
            <Col xs="6">
              <Card className="h-100">
                <CardBody style={{ padding: '0.75rem' }}>
                  <h6 className="mb-2" style={{ fontSize: '11px', fontWeight: '600', color: '#333' }}>Gender Distribution</h6>
                  <ReactApexChart
                    options={genderChartOptions}
                    series={[45, 35, 20]}
                    type="pie"
                    height={180}
                  />
                </CardBody>
              </Card>
            </Col>
            <Col xs="6">
              <Card className="h-100">
                <CardBody style={{ padding: '0.75rem' }}>
                  <h6 className="mb-2" style={{ fontSize: '11px', fontWeight: '600', color: '#333' }}>Registration Comparison</h6>
                  <ReactApexChart
                    options={registrationBarOptions}
                    series={registrationBarSeries}
                    type="bar"
                    height={180}
                  />
                </CardBody>
              </Card>
            </Col>
            <Col xs="6">
              <Card className="h-100">
                <CardBody style={{ padding: '0.75rem' }}>
                  <h6 className="mb-2" style={{ fontSize: '11px', fontWeight: '600', color: '#333' }}>Ownership</h6>
                  <ReactApexChart
                    options={ownershipChartOptions}
                    series={[60, 30, 10]}
                    type="pie"
                    height={180}
                  />
                </CardBody>
              </Card>
            </Col>
            <Col xs="6">
              <Card className="h-100">
                <CardBody style={{ padding: '0.75rem' }}>
                  <h6 className="mb-2" style={{ fontSize: '11px', fontWeight: '600', color: '#333' }}>Institute Types</h6>
                  <ReactApexChart
                    options={instituteTypeChartOptions}
                    series={[40, 35, 25]}
                    type="pie"
                    height={180}
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </TabPane>

        {/* Tab 2: Programs */}
        <TabPane tabId="2">
          <Row>
            <Col xs="6">
              <Card className="h-100">
                <CardBody style={{ padding: '0.75rem' }}>
                  <h6 className="mb-2" style={{ fontSize: '11px', fontWeight: '600', color: '#333' }}>Program Funding</h6>
                  <ReactApexChart
                    options={{
                      chart: { type: 'pie', fontFamily: 'inherit' },
                      labels: ['Total Programs', 'Govt Funded', 'Donor Funded'],
                      colors: ['#1b5642', '#a9cd98', '#f1b44c'],
                      legend: { position: 'bottom', fontSize: '10px', horizontalAlign: 'center', itemMargin: { horizontal: 5, vertical: 0 } },
                      dataLabels: { enabled: true, style: { fontSize: '8px', fontWeight: '400', colors: ['#fff'] }, dropShadow: { enabled: false } },
                      plotOptions: { pie: { donut: { size: '0%' } } }
                    }}
                    series={[100, 60, 40]} // Example data
                    type="pie"
                    height={180}
                  />
                </CardBody>
              </Card>
            </Col>
            <Col xs="6">
              <Card className="h-100">
                <CardBody style={{ padding: '0.75rem' }}>
                  <h6 className="mb-2" style={{ fontSize: '11px', fontWeight: '600', color: '#333' }}>Programs by Region</h6>
                  <ReactApexChart
                    options={{
                      chart: { type: 'pie', fontFamily: 'inherit' },
                      labels: ['Federal', 'Punjab', 'Sindh', 'Balochistan', 'KPK', 'AJK'],
                      colors: ['#1b5642', '#a9cd98', '#f1b44c', '#f46a6a', '#34c38f', '#556ee6'],
                      legend: { position: 'bottom', fontSize: '10px', horizontalAlign: 'center', itemMargin: { horizontal: 5, vertical: 0 } },
                      dataLabels: { enabled: true, style: { fontSize: '8px', fontWeight: '400', colors: ['#fff'] }, dropShadow: { enabled: false } },
                      plotOptions: { pie: { donut: { size: '0%' } } }
                    }}
                    series={[20, 30, 20, 10, 15, 5]} // Example data
                    type="pie"
                    height={180}
                  />
                </CardBody>
              </Card>
            </Col>
            <Col xs="12">
              <Card className="h-100 mt-3">
                <CardBody style={{ padding: '0.75rem' }}>
                  <h6 className="mb-2" style={{ fontSize: '11px', fontWeight: '600', color: '#333' }}>No. Of Trainings by Funding Body & Type</h6>
                  <ReactApexChart
                    options={{
                      chart: { type: 'bar', fontFamily: 'inherit', toolbar: { show: false }, height: 220 },
                      plotOptions: { bar: { horizontal: false, columnWidth: '40%', borderRadius: 4 } },
                      dataLabels: { enabled: false },
                      xaxis: { categories: ['CBT', 'Conventional', 'Trained Teachers', 'Curriculum Development'], labels: { style: { fontSize: '9px' } } },
                      yaxis: { title: { text: 'No. Of Trainings', style: { fontSize: '12px' } }, labels: { style: { fontSize: '10px' } } },
                      legend: { position: 'bottom', fontSize: '11px', horizontalAlign: 'center', itemMargin: { horizontal: 8, vertical: 2 } },
                      colors: ['#1b5642', '#a9cd98', '#f1b44c', '#f46a6a', '#34c38f'],
                      tooltip: { enabled: true },
                    }}
                    series={[
                      { name: 'ADB', data: [120, 110, 100, 90] },
                      { name: 'GIR', data: [100, 90, 80, 70] },
                      { name: 'UNHCR', data: [90, 80, 70, 60] },
                      { name: 'JICA', data: [80, 70, 60, 50] },
                      { name: 'TICA', data: [70, 60, 50, 40] }
                    ]}
                    type="bar"
                    height={220}
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </TabPane>

        {/* Tab 3: Trades */}
        <TabPane tabId="3">
          <Row>
            <Col xs="6">
              <Card className="h-100">
                <CardBody style={{ padding: '0.75rem' }}>
                  <h6 className="mb-2" style={{ fontSize: '11px', fontWeight: '600', color: '#333' }}>Trade Distribution</h6>
                  <ReactApexChart
                    options={instituteTypeChartOptions}
                    series={[40, 35, 25]}
                    type="pie"
                    height={180}
                  />
                </CardBody>
              </Card>
            </Col>
            <Col xs="6">
              <Card className="h-100">
                <CardBody style={{ padding: '0.75rem' }}>
                  <h6 className="mb-2" style={{ fontSize: '11px', fontWeight: '600', color: '#333' }}>Conventional Trades by Duration</h6>
                  <ReactApexChart
                    options={{
                      chart: {
                        type: 'bar',
                        stacked: true,
                        fontFamily: 'inherit',
                        toolbar: { show: false },
                        height: 180
                      },
                      plotOptions: {
                        bar: {
                          horizontal: false,
                          columnWidth: '40%',
                          borderRadius: 4
                        }
                      },
                      dataLabels: {
                        enabled: false
                      },
                      xaxis: {
                        categories: ['2010', '2011', '2012', '2013', '2014', '2015'],
                        labels: { style: { fontSize: '11px' } }
                      },
                      yaxis: {
                        title: { text: 'No. of Trades', style: { fontSize: '12px' } },
                        labels: { style: { fontSize: '10px' } }
                      },
                      legend: {
                        position: 'bottom',
                        fontSize: '10px',
                        horizontalAlign: 'center',
                        itemMargin: { horizontal: 5, vertical: 0 }
                      },
                      colors: ['#556ee6', '#34c38f', '#f1b44c', '#f46a6a', '#1b5642'],
                      tooltip: { enabled: true },
                      grid: { strokeDashArray: 4 },
                      responsive: [{
                        breakpoint: 480,
                        options: { chart: { width: 200 } }
                      }]
                    }}
                    series={[
                      { name: '3 Months', data: [5, 6, 7, 8, 9, 10] },
                      { name: '6 Months', data: [4, 5, 6, 7, 8, 9] },
                      { name: '1 Year', data: [3, 4, 5, 6, 7, 8] },
                      { name: '2 Years', data: [2, 3, 4, 5, 6, 7] },
                      { name: '3 Years', data: [1, 2, 3, 4, 5, 6] }
                    ]}
                    type="bar"
                    height={180}
                  />
                </CardBody>
              </Card>
            </Col>
            <Col xs="12" className="mt-3">
              <Card className="h-100">
                <CardBody style={{ padding: '0.75rem' }}>
                  <h6 className="mb-2" style={{ fontSize: '11px', fontWeight: '600', color: '#333' }}>CBT Trades by Sector & Level</h6>
                  <ReactApexChart
                    options={{
                      chart: {
                        type: 'bar',
                        stacked: true,
                        fontFamily: 'inherit',
                        toolbar: { show: false },
                        height: 260
                      },
                      plotOptions: {
                        bar: {
                          horizontal: false,
                          columnWidth: '40%',
                          borderRadius: 4
                        }
                      },
                      dataLabels: {
                        enabled: false
                      },
                      xaxis: {
                        categories: ['Construction', 'Manufacturing', 'Textile', 'IT', 'Services'],
                        labels: { style: { fontSize: '11px' } }
                      },
                      yaxis: {
                        title: { text: 'No. of Trades', style: { fontSize: '12px' } },
                        labels: { style: { fontSize: '10px' } }
                      },
                      legend: {
                        position: 'bottom',
                        fontSize: '11px',
                        horizontalAlign: 'center',
                        itemMargin: { horizontal: 8, vertical: 2 }
                      },
                      colors: ['#1b5642', '#a9cd98', '#f1b44c'],
                      tooltip: { enabled: true },
                      grid: { strokeDashArray: 4 },
                      responsive: [{
                        breakpoint: 480,
                        options: { chart: { width: 200 } }
                      }]
                    }}
                    series={[
                      { name: 'CBT Lvl 1', data: [10, 8, 9, 7, 6] },
                      { name: 'CBT Lvl 2', data: [7, 6, 8, 6, 5] },
                      { name: 'CBT Lvl 3', data: [5, 4, 6, 5, 4] }
                    ]}
                    type="bar"
                    height={260}
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </TabPane>

        {/* Tab 4: Enrollments */}
        <TabPane tabId="4">
          <Row>
            <Col xs="12">
              <Card className="h-100">
                <CardBody style={{ padding: '0.75rem' }}>
                  <h6 className="mb-2" style={{ fontSize: '11px', fontWeight: '600', color: '#333' }}>Enrollments by Sector Over Time</h6>
                  <ReactApexChart
                    options={{
                      chart: {
                        type: 'bar',
                        stacked: false,
                        fontFamily: 'inherit',
                        toolbar: { show: false },
                        height: 260
                      },
                      plotOptions: {
                        bar: {
                          horizontal: false,
                          columnWidth: '40%',
                          borderRadius: 4
                        }
                      },
                      dataLabels: {
                        enabled: false
                      },
                      xaxis: {
                        categories: ['2010', '2011', '2012', '2013', '2014', '2015'],
                        labels: { style: { fontSize: '11px' } }
                      },
                      yaxis: {
                        title: { text: 'Enrollments', style: { fontSize: '12px' } },
                        labels: { style: { fontSize: '10px' } }
                      },
                      legend: {
                        position: 'bottom',
                        fontSize: '11px',
                        horizontalAlign: 'center',
                        itemMargin: { horizontal: 8, vertical: 2 }
                      },
                      colors: ['#1b5642', '#a9cd98', '#f1b44c', '#556ee6', '#f46a6a'],
                      tooltip: { enabled: true },
                      grid: { strokeDashArray: 4 },
                      responsive: [{
                        breakpoint: 480,
                        options: { chart: { width: 200 } }
                      }]
                    }}
                    series={[
                      { name: 'Construction', data: [120, 130, 125, 140, 135, 150] },
                      { name: 'Manufacturing', data: [110, 115, 120, 125, 130, 135] },
                      { name: 'Textile', data: [100, 105, 110, 115, 120, 125] },
                      { name: 'IT', data: [90, 95, 100, 105, 110, 115] },
                      { name: 'Services', data: [80, 85, 90, 95, 100, 105] }
                    ]}
                    type="bar"
                    height={260}
                  />
                </CardBody>
              </Card>
            </Col>
            <Col xs="12" className="mt-3">
              <Card className="h-100">
                <CardBody style={{ padding: '0.75rem' }}>
                  <h6 className="mb-2" style={{ fontSize: '11px', fontWeight: '600', color: '#333' }}>Passouts by Sector Over Time</h6>
                  <ReactApexChart
                    options={{
                      chart: {
                        type: 'bar',
                        stacked: false,
                        fontFamily: 'inherit',
                        toolbar: { show: false },
                        height: 260
                      },
                      plotOptions: {
                        bar: {
                          horizontal: false,
                          columnWidth: '40%',
                          borderRadius: 4
                        }
                      },
                      dataLabels: {
                        enabled: false
                      },
                      xaxis: {
                        categories: ['2010', '2011', '2012', '2013', '2014', '2015'],
                        labels: { style: { fontSize: '11px' } }
                      },
                      yaxis: {
                        title: { text: 'Passouts', style: { fontSize: '12px' } },
                        labels: { style: { fontSize: '10px' } }
                      },
                      legend: {
                        position: 'bottom',
                        fontSize: '11px',
                        horizontalAlign: 'center',
                        itemMargin: { horizontal: 8, vertical: 2 }
                      },
                      colors: ['#1b5642', '#a9cd98', '#f1b44c', '#556ee6', '#f46a6a'],
                      tooltip: { enabled: true },
                      grid: { strokeDashArray: 4 },
                      responsive: [{
                        breakpoint: 480,
                        options: { chart: { width: 200 } }
                      }]
                    }}
                    series={[
                      { name: 'Construction', data: [100, 110, 105, 120, 115, 130] },
                      { name: 'Manufacturing', data: [90, 95, 100, 105, 110, 115] },
                      { name: 'Textile', data: [80, 85, 90, 95, 100, 105] },
                      { name: 'IT', data: [70, 75, 80, 85, 90, 95] },
                      { name: 'Services', data: [60, 65, 70, 75, 80, 85] }
                    ]}
                    type="bar"
                    height={260}
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </TabPane>

        {/* Tab 5: Budget */}
        <TabPane tabId="5">
          <Row>
            <Col xs="6">
              <Card className="h-100">
                <CardBody style={{ padding: '0.75rem' }}>
                  <h6 className="mb-2" style={{ fontSize: '11px', fontWeight: '600', color: '#333' }}>Budget Allocation</h6>
                  <ReactApexChart
                    options={ownershipChartOptions}
                    series={[60, 30, 10]}
                    type="pie"
                    height={180}
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </React.Fragment>
  );
};

export default StatsCards;
