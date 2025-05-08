import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";
import LanguageDropdown from "../../components/Common/TopbarDropdown/LanguageDropdown";
import NotificationDropdown from "../../components/Common/TopbarDropdown/NotificationDropdown";
import ProfileMenu from "../../components/Common/TopbarDropdown/ProfileMenu";
import AppsDropdown from "../../components/Common/TopbarDropdown/AppsDropdown";
import { setSelectedProvince } from "../../store/provinceActions";
import { setSelectedYear, setSelectedMinistry, setSelectedDepartment } from "../../store/actions";

const ministries = [
  "Ministry of Education",
  "Ministry of Health",
  "Ministry of Technical Education",
];

const departmentsByMinistries = {
  "Ministry of Education": [
    "Department of Education",
  ],
  "Ministry of Health": [
    "Department of Health",
  ],
  "Ministry of Technical Education": [
    "Department of Technical Education",
  ],
};

const departmentsByProvince = {
  Punjab: [
    "Punjab Education Department",
    "Punjab Health Department",
    "Punjab Technical Education Department",
  ],
  Sindh: [
    "Sindh Education Department",
    "Sindh Health Department",
    "Sindh Technical Education Department",
  ],
  Balochistan: [
    "Balochistan Education Department",
    "Balochistan Health Department",
    "Balochistan Technical Education Department",
  ],
  KPK: [
    "KPK Education Department",
    "KPK Health Department",
    "KPK Technical Education Department",
  ],
  GB: [
    "GB Education Department",
    "GB Health Department",
    "GB Technical Education Department",
  ],
  AJK: [
    "AJK Education Department",
    "AJK Health Department",
    "AJK Technical Education Department",
  ],
};

const Header = ({ t }) => {
  const [search, setSearch] = useState(false);
  const selectedProvince = useSelector((state) => state.province.selectedProvince);
  const selectedDepartment = useSelector((state) => state.instituteMetrics.selectedDepartment);
  const [selectedMinistry, setSelectedMinistryLocal] = useState(null);
  const dispatch = useDispatch();

  // When province changes, reset selectedDepartment
  React.useEffect(() => {
    dispatch(setSelectedDepartment(null));
  }, [selectedProvince, dispatch]);

  function toggleFullscreen() {
    if (
      !document.fullscreenElement &&
      !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
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
    const body = document.body;
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
              <button
                type="button"
                className="btn btn-sm px-3 font-size-24 header-item waves-effect"
                id="vertical-menu-btn"
                onClick={tToggle}
              >
                <i className="ri-menu-2-line align-middle"></i>
              </button>
            </div>
            <div className="d-flex align-items-center">
              <h2 className="dashboard-title">
                {t("NAVTT Institutes National Overview")}
              </h2>
            </div>
          </div>

          <div className="d-flex align-items-center">
            {selectedProvince && selectedProvince !== "all" && (
              <div className="d-flex align-items-center ms-2">
                {selectedProvince === "Federal" && selectedMinistry !== null ? (
                  <select
                    className="form-select form-select-sm mb-0 my-n1 mr-2"
                    style={{ maxWidth: "fit-content" }}
                  >
                    {departmentsByMinistries[selectedMinistry]?.map((department) => (
                      <option key={department} value={department}>
                        {department}
                      </option>
                    ))}
                  </select>
                ) : ''}
                {selectedProvince === "Federal" ? (
                  <select
                    className="form-select form-select-sm mb-0 my-n1"
                    style={{ maxWidth: "fit-content" }}
                    onChange={(e) => {
                      setSelectedMinistryLocal(e.target.value);
                      dispatch(setSelectedMinistry(e.target.value));
                    }}
                  >
                    <option selected disabled>Select Ministry</option>
                    {ministries.map((ministry) => (
                      <option key={ministry} value={ministry}>
                        {ministry}
                      </option>
                    ))}
                  </select>
                ) : (
                  <select
                    className="form-select form-select-sm mb-0 my-n1"
                    style={{ maxWidth: "fit-content" }}
                    value={selectedDepartment || ''}
                    onChange={(e) => {
                      const value = e.target.value || null;
                      dispatch(setSelectedDepartment(value));
                    }}
                  >
                    <option value="">All Departments</option>
                    {departmentsByProvince[selectedProvince]?.map((department) => (
                      <option key={department} value={department}>
                        {department}
                      </option>
                    ))}
                  </select>
                )}

              </div>
            )}
            <div className="d-flex align-items-center ms-2">
              <select
                value={selectedProvince ?? "all"}
                onChange={(e) =>
                  dispatch(setSelectedProvince(e.target.value))
                }
                className="form-select form-select-sm mb-0 my-n1"
                style={{ maxWidth: "fit-content" }}
              >
                <option value="all">All</option>
                <option value="Punjab">Punjab</option>
                <option value="Sindh">Sindh</option>
                <option value="Balochistan">Balochistan</option>
                <option value="KPK">KPK</option>
                <option value="Federal">Federal</option>
                <option value="GB">Gilgit Baltistan</option>
                {/* <option value="AJK">AJK</option> */}
              </select>
            </div>
            <div className="d-flex align-items-center ms-2">
              <label
                className="mb-0 p-0"
                style={{ marginRight: "5px" }}
              >
                {t("Year")}:
              </label>
              <select className="form-select form-select-sm" onChange={e => dispatch(setSelectedYear(e.target.value))}>
                {["2025", "2024", "2023", "2022", "2021", "2020"].map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="dropdown d-none d-lg-inline-block ms-2">
              <button
                type="button"
                onClick={toggleFullscreen}
                className="btn header-item noti-icon"
                data-toggle="fullscreen"
              >
                <i
                  className="ri-fullscreen-line"
                  style={{ color: "#1b5642" }}
                />
              </button>
            </div>
            {/* <NotificationDropdown />
                        <LanguageDropdown />
                        <ProfileMenu />
                        <AppsDropdown /> */}
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default withTranslation()(Header);