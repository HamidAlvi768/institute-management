import React from "react";
import UsePanel from "./UserPanel";
import OrderStatus from "./OrderStatus";
import Notifications from "./Notifications";
import SocialSource from "./SocialSource";
import OverView from "./OverView";
import RevenueByLocation from "./RevenueByLocation";
import LatestTransation from "./LatestTransation";

import { Row, Container } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const Dashboard = () => {
  document.title = "Dashboard | Navttc - React Admin & Dashboard Template";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          {/* User Panel Charts */}
          <UsePanel />

          <Row>
            {/* Overview Chart */}
            <OverView />
            {/* Social Source Chart */}
            <SocialSource />
          </Row>

          <Row>
            {/* Order Stats */}
            <OrderStatus />
            {/* Notifications */}
            <Notifications />
          </Row>

        </Container>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
