import React from "react";
import Header from "../Header/header";
import MenuHeader from "../MenuHeader/menuheader";

const Layout = (props) => {
  return (
    <>
      <Header />
      <MenuHeader />
      {props.children}
    </>
  );
};

export default Layout;
