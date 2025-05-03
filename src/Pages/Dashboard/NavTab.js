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
                    <NavLink style={{cursor:'pointer'}}
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => toggleTab('1')}
                    >
                        All
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink style={{cursor:'pointer'}}
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => toggleTab('2')}
                    >
                        Institute
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink style={{cursor:'pointer'}}
                        className={classnames({ active: activeTab === '3' })}
                        onClick={() => toggleTab('3')}
                    >
                        Courses
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink style={{cursor:'pointer'}}
                        className={classnames({ active: activeTab === '4' })}
                        onClick={() => toggleTab('4')}
                    >
                        Batches
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink style={{cursor:'pointer'}}
                        className={classnames({ active: activeTab === '5' })}
                        onClick={() => toggleTab('5')}
                    >
                        Trainers
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink style={{cursor:'pointer'}}
                        className={classnames({ active: activeTab === '6' })}
                        onClick={() => toggleTab('6')}
                    >
                        Certification
                    </NavLink>
                </NavItem>
            </Nav>

            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row>
                        <EnrollmentPassoutChart />
                        <ProgramsPieChart />

                        <EnrollmentAnalyticsChart />
                        <ProgramsTradesChart />
                        <CombinedProgramsChart />
                        <CertificationTrainersChart />
                        <EmploymentOutcomesChart />
                        <SectorsAnalytics />
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                        <EnrollmentPassoutChart />
                        <ProgramsPieChart />
                    </Row>
                </TabPane>
                <TabPane tabId="3">
                    {/* New Dashboard Charts: 3 in one row */}
                    <Row>
                        <EnrollmentAnalyticsChart />
                        <ProgramsTradesChart />
                        <CombinedProgramsChart />
                    </Row>

                </TabPane>
                <TabPane tabId="4">
                    <Row>
                        <CertificationTrainersChart />
                        <EmploymentOutcomesChart />
                        <SectorsAnalytics />
                    </Row>
                </TabPane>
            </TabContent>
        </div>
    );
}

export default NavTab;
