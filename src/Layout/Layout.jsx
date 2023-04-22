import { Outlet } from "react-router-dom";
import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import "./Layout.scss"

function Layout() {
  return (
    <div className="layout">
      <Header />
      <Outlet/>
      <Footer />
    </div>
  );
}

export default Layout;
