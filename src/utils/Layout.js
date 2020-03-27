import React from "react";

import Header from "../components/Header";

const Layout = props => {
  return (
    <section className="layout">
      <Header />
      <main className="layout__body">{props.children}</main>
    </section>
  );
};

export default Layout;
