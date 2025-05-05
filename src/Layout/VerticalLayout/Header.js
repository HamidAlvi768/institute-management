import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

import LanguageDropdown from "../../components/Common/TopbarDropdown/LanguageDropdown";
import NotificationDropdown from "../../components/Common/TopbarDropdown/NotificationDropdown";

//i18n
import { withTranslation } from "react-i18next";

//import images
import logoSm from "../../assets/images/logo-sm.png";
import logoDark from "../../assets/images/logo-dark.png";
import logoLight from "../../assets/images/logo-light.png";

// Redux Store
import {
  showRightSidebarAction,
  toggleLeftmenu,
  changeSidebarType,
} from "../../store/actions";
import ProfileMenu from "../../components/Common/TopbarDropdown/ProfileMenu";
import AppsDropdown from "../../components/Common/TopbarDropdown/AppsDropdown";

const Header = (props) => {
  const [search, setsearch] = useState(false);

  function toggleFullscreen() {
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }

  function tToggle() {
    var body = document.body;
    if (window.screen.width <= 998) {
      body.classList.toggle("sidebar-enable");
    } else {
      body.classList.toggle("vertical-collpsed");
      body.classList.toggle("sidebar-enable");
    }
  }

  return (
    <React.Fragment>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            <div className="navbar-brand-box">
              {/* <Link to="/" className="logo logo-dark">
                <span className="logo-sm">
                  <img src={logoSm} alt="logo-sm-dark" height="10" />
                </span>
                <span className="logo-lg">
                  <img src={logoDark} alt="logo-dark" height="10" />
                </span>
              </Link>

              <Link to="/" className="logo logo-light">
                <span className="logo-sm">
                  <img src={logoSm} alt="logo-sm-light" height="10" />
                </span>
                <span className="logo-lg">
                  <img src={logoLight} alt="logo-light" height="10" />
                </span>
              </Link> */}
              <button
                type="button"
                className="btn btn-sm px-3 font-size-24 header-item waves-effect"
                id="vertical-menu-btn"
                onClick={() => {
                  tToggle();
                }}
              >
                <i className="ri-menu-2-line align-middle"></i>
              </button>
            </div>

            {/* <button
              type="button"
              className="btn btn-sm px-3 font-size-24 header-item waves-effect"
              id="vertical-menu-btn"
              onClick={() => {
                tToggle();
              }}
            >
              <i className="ri-menu-2-line align-middle"></i>
            </button> */}
            <div className="flex align-items-center">
              <h2 className="dashboard-title">NAVTTC Institutes National Overview</h2>
            </div>

            {/* <form className="app-search d-none d-lg-block">
                <div className="position-relative">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                  />
                  <span className="ri-search-line"></span>
                </div>
              </form> */}
            {/* <div style={{width:'60px'}}>
              <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 513 357.071"><path fill="#fff" fill-rule="nonzero" d="M28.477.32h456.044c15.488 0 28.159 12.672 28.159 28.16v300.111c0 15.488-12.671 28.16-28.159 28.16H28.477c-15.486 0-28.157-12.672-28.157-28.16V28.48C.32 12.992 12.991.32 28.477.32z" /><path fill="#01411C" fill-rule="nonzero" d="M122.835 356.751V.32h361.686c15.488 0 28.159 12.672 28.159 28.16v300.111c0 15.488-12.671 28.16-28.159 28.16H122.835z" /><path fill="#fff" fill-rule="nonzero" d="M290.758 76.663C247.631 90.44 216.4 130.838 216.4 178.534c0 59.057 47.875 106.931 106.931 106.931 43.252 0 80.504-25.681 97.345-62.626a98.756 98.756 0 01-4.89 4.661c-40.459 35.966-102.416 32.322-138.381-8.138s-32.32-102.417 8.139-138.382a99.87 99.87 0 015.214-4.317zm71.563 21.855l45.044 50.672-66.225-14.516 62.11-27.179-34.273 58.495-6.656-67.472z" /><rect fill="none" stroke="#CCC" stroke-width=".64" stroke-miterlimit="22.926" x=".32" y=".319" width="512.359" height="356.43" rx="27.231" ry="28.159" /></svg>
            </div> */}
          </div>

          <div className="d-flex">
            {/* <div className="dropdown d-inline-block d-lg-none ms-2">
              <button
                onClick={() => {
                  setsearch(!search);
                }}
                type="button"
                className="btn header-item noti-icon "
                id="page-header-search-dropdown"
              >
                <i className="ri-search-line" />
              </button>
              <div
                className={
                  search
                    ? "dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 show"
                    : "dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                }
                aria-labelledby="page-header-search-dropdown"
              >
                <form className="p-3">
                  <div className="form-group m-0">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search ..."
                        aria-label="Recipient's username"
                      />
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="submit">
                          <i className="ri-search-line" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div> */}

            <div className="d-flex align-items-center">
              <label className="mb-0 p-0" style={{ marginRight: '5px' }}>Year:</label>
              <select className="form-select form-select-sm">
                {["2025", "2024", "2023", "2022", "2021", "2020"].map((item, key) => (
                  <option key={key} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="dropdown d-none d-lg-inline-block ms-1">
              <button
                type="button"
                onClick={() => {
                  toggleFullscreen();
                }}
                className="btn header-item noti-icon"
                data-toggle="fullscreen"
              >
                <i className="ri-fullscreen-line" style={{ color: '#1b5642' }} />
              </button>
            </div>

            {/* <div
              className="dropdown d-inline-block"
              onClick={() => {
                props.showRightSidebarAction(!props.showRightSidebar);
              }}
            >
              <button
                type="button"
                className="btn header-item noti-icon right-bar-toggle waves-effect"
              >
                <i className="mdi mdi-cog"></i>
              </button>
            </div> */}

          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

const mapStatetoProps = (state) => {
  const { layoutType, showRightSidebar, leftMenu, leftSideBarType } =
    state.Layout;
  return { layoutType, showRightSidebar, leftMenu, leftSideBarType };
};

export default connect(mapStatetoProps, {
  showRightSidebarAction,
  toggleLeftmenu,
  changeSidebarType,
})(withTranslation()(Header));
