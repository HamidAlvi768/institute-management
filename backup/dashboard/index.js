import React from "react";

import { Container } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const Dashboard = () => {
  document.title = "Dashboard | Navttc - React Admin & Dashboard Template";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Navttc" breadcrumbItem="Dashboard" />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
