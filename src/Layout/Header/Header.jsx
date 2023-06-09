import './Header.scss';
import { NavLink } from "react-router-dom";
import logo from "../../img/headerimg/kaaryar-logo.png"
import dropdown from "../../img/headerimg/dropdown.svg"
import listnav from "../../img/headerimg/listnav.png"


function Header() {

  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="resnavicon">
          <img src={listnav} alt="listnavicon" />
        </div>
        <div className="nav">
          <NavLink to="/" end>خانه</NavLink>
          <NavLink to="/educationCourses">دوره های آموزشی</NavLink>
          <div className="dropdown">
            <NavLink to="/cooperation">
              همکاری با کاریار
            </NavLink>
            <img src={dropdown} alt="dropdown" />
            <div className="dropdown-content">
              <NavLink to="/cooperation" end>همکاری با کاریار</NavLink>
              <div className="navline"></div>
              <NavLink to="/cooperation">استودیو کاریار</NavLink>
            </div>
          </div>
          <div className="dropdown">
            <NavLink to="/about">
              همکاری با کاریار
            </NavLink>
            <img src={dropdown} alt="dropdown" />
            <div className="dropdown-content">
              <NavLink to="/about">درباره کاریار</NavLink>
              <div className="navline"></div>
              <NavLink to="/team">تیم کاریار</NavLink>
            </div>
          </div>
        </div>

        <div className="enter">
          <button>
            <NavLink to="/login">ورود به سامانه آموزشی</NavLink>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
