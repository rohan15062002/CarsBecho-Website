import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Footerr from "./Footerr";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>
        <div className="content container mt-4">{children}</div>
      </div>
      <Footerr/>
    </>
  );
};

export default Layout;
