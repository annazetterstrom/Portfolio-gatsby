import React from "react";
import { Link } from "gatsby"; 

const Layout = ({ children }) => (
  <React.Fragment>
    <header className="header">
      <Link to="/">Anna Zetterström</Link>
    </header>
    <main className="content">{children}</main>
  </React.Fragment>
)

export default Layout; 