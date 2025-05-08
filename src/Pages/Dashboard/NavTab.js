import React, { useState } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';
import UserPanel from './UserPanel';
import OrderStatus from "./OrderStatus";
import Notifications from "./Notifications";
import SocialSource from "./SocialSource";
import OverView from "./OverView";
import RevenueByLocation from "./RevenueByLocation";
import LatestTransation from "./LatestTransation";
import EnrollmentAnalyticsChart from "./EnrollmentAnalyticsChart";
import EmploymentOutcomesChart from "./EmploymentOutcomesChart";
import InstituteMetricsChart from "./InstituteMetricsChart";
import CombinedProgramsChart from "./CombinedProgramsChart";
import CertificationTrainersChart from "./CertificationTrainersChart";
import ProgramsTradesChart from "./ProgramsTradesChart";
import EnrollmentPassoutChart from "./EnrollmentPassoutChart";
import SectorsAnalytics from "./SectorsAnalytics";
import ProgramsPieChart from './ProgramsPieChart';
import AffiliationBodiesChart from './AffiliationBodiesChart';
import InstituteRegistrationChart from './InstituteRegistrationChart';
import InstituteAccreditationChart from './InstituteAccreditationChart';
import InstituteOwnershipChart from './InstituteOwnershipChart';
import InstituteTypeChart from './InstituteTypeChart';
import InstituteAffiliationChart from './InstituteAffiliationChart';
import ProgramFundingChart from './ProgramFundingChart';
import ProgramsByRegionChart from './ProgramsByRegionChart';
import TrainingsByFundingChart from './TrainingsByFundingChart';
import ReactApexChart from 'react-apexcharts';

import { Row, Container, Col, Card, CardBody, CardTitle } from "reactstrap";

const NavTab = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggleTab = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    return (
        <div className="mb-4">
            <Nav tabs>
                <NavItem>
                    <NavLink style={{ cursor: 'pointer' }}
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => toggleTab('1')}
                    >
                        All
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink style={{ cursor: 'pointer' }}
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => toggleTab('2')}
                    >
                        Institutes
                    </NavLink>
                </NavItem>
                {/* <NavItem>
                    <NavLink style={{ cursor: 'pointer' }}
                        className={classnames({ active: activeTab === '3' })}
                        onClick={() => toggleTab('3')}
                    >
                        Affiliated
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink style={{ cursor: 'pointer' }}
                        className={classnames({ active: activeTab === '4' })}
                        onClick={() => toggleTab('4')}
                    >
                        Accredited
                    </NavLink>
                </NavItem> */}
                
                <NavItem>
                    <NavLink style={{ cursor: 'pointer' }}
                        className={classnames({ active: activeTab === '3' })}
                        onClick={() => toggleTab('3')}
                    >
                        Trades
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink style={{ cursor: 'pointer' }}
                        className={classnames({ active: activeTab === '4' })}
                        onClick={() => toggleTab('4')}
                    >
                        Enrollment
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink style={{ cursor: 'pointer' }}
                        className={classnames({ active: activeTab === '5' })}
                        onClick={() => toggleTab('5')}
                    >
                        Trainers
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink style={{ cursor: 'pointer' }}
                        className={classnames({ active: activeTab === '6' })}
                        onClick={() => toggleTab('6')}
                    >
                        Certification
                    </NavLink>
                </NavItem>
               
            </Nav>

            <TabContent activeTab={activeTab}>
                {/* Tab 1: All Institute - Keeping the exact layout and ordering from NavTabLayout */}
                <TabPane tabId="1">
                    {/* Institute Overview Section */}
                    <div className="mb-4">
                        <h4 className="mb-3">Institute Overview</h4>
                        <Row>
                            {/* <InstituteMetricsChart /> */}
                            <Col xl={3}><InstituteRegistrationChart /></Col>
                            <Col xl={3}><InstituteAccreditationChart /></Col>
                            <Col xl={3}><InstituteOwnershipChart /></Col>
                            <Col xl={3}><InstituteTypeChart /></Col>
                        </Row>
                    </div>
                    
                    {/* Trades Section */}
                    <div className="mb-4">
                        <h4 className="mb-3">Trades</h4>
                        <Row>
                            <Col xl={4}>
                                <ProgramsTradesChart />
                            </Col>
                            <Col xl={4}>
                                <CombinedProgramsChart />
                            </Col>
                            <Col xl={4}>
                                <SectorsAnalytics />
                            </Col>
                        </Row>
                    </div>

                    {/* Programs Section */}
                    <div className="mb-4">
                        <h4 className="mb-3">Programs</h4>
                        <Row>
                            <Col xl={3}>
                                <ProgramFundingChart />
                            </Col>
                            <Col xl={3}>
                                <ProgramsByRegionChart />
                            </Col>
                            <Col xl={3}>
                                <TrainingsByFundingChart />
                            </Col>
                            <Col xl={3}>
                                <ProgramsPieChart />
                            </Col>
                        </Row>
                    </div>


                    {/* Enrollment & Outcomes Section */}
                    <div className="mb-4">
                        <h4 className="mb-3">Enrollment & Outcomes</h4>
                        <Row>
                            <EnrollmentAnalyticsChart />
                            <EnrollmentPassoutChart />
                            <EmploymentOutcomesChart />
                        </Row>
                    </div>

                    {/* Certification & Affiliation Section */}
                    <div className="mb-4">
                        <h4 className="mb-3">Certification & Affiliation</h4>
                        <Row>
                            <CertificationTrainersChart />
                            <AffiliationBodiesChart />
                        </Row>
                    </div>
                </TabPane>
                
                {/* Tab 2: Institutes */}
                <TabPane tabId="2">
                    <Row>
                        <Col xl={6}><InstituteRegistrationChart /></Col>
                        <Col xl={6}><InstituteAccreditationChart /></Col>
                    </Row>
                    <Row>
                        <Col xl={6}><InstituteOwnershipChart /></Col>
                        <Col xl={6}><InstituteTypeChart /></Col>
                    </Row>
                </TabPane>
                {/* Either Affiliated/Accredited will be shown or the Trades and onwards will be shown,
                 they cant be shown at the same time */}
                {/* Tab 3: Affiliated */}
                {/* Tab 3: Affiliated */}
                {/* <TabPane tabId="3">
                    <Row>
                        <Col xl={6}><InstituteAffiliationChart /></Col>
                    </Row>
                </TabPane> */}
                
                {/* Tab 4: Accredited */}
                {/* <TabPane tabId="4">
                    <Row>
                        <Col xl={6}><InstituteAccreditationChart /></Col>
                    </Row>
                </TabPane> */}

                {/* Tab 3: Trades */}
                <TabPane tabId="3">
                    <Row>
                        <Col xl={6}>
                            <ProgramsTradesChart columnSize={12} />
                        </Col>
                        <Col xl={6}>
                            <SectorsAnalytics columnSize={12} />
                        </Col>
                    </Row>
                </TabPane>
                
                {/* Tab 4: Enrollment */}
                <TabPane tabId="4">
                    <Row>
                        <Col xl={6}>
                            <EnrollmentAnalyticsChart columnSize={12} />
                        </Col>
                        <Col xl={6}>
                            <EnrollmentPassoutChart columnSize={12} />
                        </Col>
                    </Row>
                </TabPane>
                
                {/* Tab 5: Trainers */}
                <TabPane tabId="5">
                    <Row>
                        <Col xl={6}>
                            <CertificationTrainersChart columnSize={12} />
                        </Col>
                        <Col xl={6}>
                            <EmploymentOutcomesChart columnSize={12} />
                        </Col>
                    </Row>
                </TabPane>
                
                {/* Tab 6: Certification */}
                <TabPane tabId="6">
                    <Row>
                        <Col xl={6}>
                            <CertificationTrainersChart columnSize={12} />
                        </Col>
                        <Col xl={6}>
                            <AffiliationBodiesChart columnSize={12} />
                        </Col>
                    </Row>
                </TabPane>

                {/* Tab 2: Programs */}
                <TabPane tabId="2">
                    <Row>
                        <Col xl={6}>
                            <ProgramFundingChart />
                        </Col>
                        <Col xl={6}>
                            <ProgramsByRegionChart />
                        </Col>
                        <Col xl={12} className="mt-3">
                            <TrainingsByFundingChart />
                        </Col>
                    </Row>
                </TabPane>
            </TabContent>
        </div>
    );
}

export default NavTab;