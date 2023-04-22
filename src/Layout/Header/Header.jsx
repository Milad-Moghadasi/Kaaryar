import './Header.scss';
import { NavLink } from "react-router-dom";
import logo from "../../img/logo.png"

function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav">
          <NavLink to="/" end>خانه</NavLink>
          <NavLink to="/educationCourses">دوره های آموزشی</NavLink>
          <NavLink to="/cooperation">همکاری با کاریار</NavLink>
          <NavLink to="/about">درباره کاریار</NavLink>
        </div>
        <div className="enter">
          <button>ورود به سامانه آموزشی</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
