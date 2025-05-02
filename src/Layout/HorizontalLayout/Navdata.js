import React, { useState } from "react";

const Navdata = () => {
  const [ui, setui] = useState(false);
  const [app, setapp] = useState(false);
  const [email, setemail] = useState(false);
  const [component, setcomponent] = useState(false);
  const [form, setform] = useState(false);
  const [table, settable] = useState(false);
  const [chart, setchart] = useState(false);
  const [icon, seticon] = useState(false);
  const [map, setmap] = useState(false);
  const [pages, setpages] = useState(false);
  const [auth, setauth] = useState(false);
  const [utility, setutility] = useState(false);

  const NavnavData = [
    {
      id: 1,
      label: "Dashboard",
      icon: "mdi mdi-home-variant-outline me-2",
      isdropDown: true,
      click: function () {
        setui(false);
        setapp(false);
        setcomponent(false);
        setpages(false);
      },
    }
  ];
  return <React.Fragment>{NavnavData}</React.Fragment>;
};

export default Navdata;
