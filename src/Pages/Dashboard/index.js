import React from "react";
import UserPanel from "./UserPanel";
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


import { Row, Container, Col, Card, CardBody, CardTitle } from "reactstrap";
import CourseChart from "../AllCharts/apex/coursechart";
import NavTab from "./NavTab";

const Dashboard = () => {
  document.title = "Dashboard | Navttc - React Admin & Dashboard Template";


  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          {/* User Panel Charts */}
          <UserPanel />

          <Row>
            {/* Overview Chart */}
            <OverView />
            {/* Social Source Chart */}
            <SocialSource />
            <InstituteMetricsChart />
          </Row>

          <NavTab />

        </Container>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
