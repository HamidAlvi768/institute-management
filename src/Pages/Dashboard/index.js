import React from "react";
import UsePanel from "./UserPanel";
import OrderStatus from "./OrderStatus";
import Notifications from "./Notifications";
import SocialSource from "./SocialSource";
import OverView from "./OverView";
import RevenueByLocation from "./RevenueByLocation";
import LatestTransation from "./LatestTransation";

import { Row, Container, Col, Card, CardBody, CardTitle } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const Dashboard = () => {
  document.title = "Dashboard | Navttc - React Admin & Dashboard Template";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Navttc" breadcrumbItem="Dashboard" />
          {/* User Panel Charts */}
          <UsePanel />

          <Row>
            {/* Overview Chart */}
            <OverView />
            {/* Social Source Chart */}
            <SocialSource />
          </Row>

          <Row>
            {/* Parent Card for Course Metrics Section */}
            <Col xl={12}>
              <Card>
                <CardBody>
                  <CardTitle tag="h4">Course & Training Metrics</CardTitle>
                  <Row>
                    <OrderStatus cardClassName="transparent-card" />
                    <Notifications cardClassName="transparent-card" />
                    <RevenueByLocation cardClassName="transparent-card" />
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>

          {/* Latest Transaction Table */}
          <LatestTransation />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
