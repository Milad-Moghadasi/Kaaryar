import './Header.scss';
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { loginContext } from "../../LoginContext";
import logo from "../../img/headerimg/kaaryar-logo.png"
import dropdown from "../../img/headerimg/dropdown.svg"
import listnav from "../../img/headerimg/listnav.png"
import { useState } from 'react';


function Header() {
  const [isLogin, setIsLogin] = useContext(loginContext);
  const [open, setOpen] = useState(false);
  const [anotherOpen, setAnotherOpen] = useState(false);

  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="resnavicon">
          <img src={listnav} alt="listnavicon" onClick={() => setOpen(!open)} />
        </div>

        <div className="nav">
          <NavLink to="/" end>خانه</NavLink>
          <NavLink to="/educationCourses">دوره های آموزشی</NavLink>
          <div className="dropdown" >
            <NavLink to="/cooperation">
              همکاری با کاریار
            </NavLink>
            <img src={dropdown} alt="dropdown" onClick={() => setOpen(!open)} />
            <div className={
              open ? "dropdown-content open" : "dropdown-content"
            }>
              <NavLink to="/cooperation" end>همکاری با کاریار</NavLink>
              <div className="navline"></div>
              <NavLink to="/cooperation">استودیو کاریار</NavLink>
            </div>
          </div>
          <div className="dropdown">
            <NavLink to="/about">درباره کاریار</NavLink>
            <img src={dropdown} alt="dropdown" onClick={() => setAnotherOpen(!anotherOpen)} />
            <div className={
              anotherOpen ? "dropdown-content open" : "dropdown-content"
            }>
              <NavLink to="/about">درباره کاریار</NavLink>
              <div className="navline"></div>
              <NavLink to="/team">تیم کاریار</NavLink>
            </div>
          </div>
        </div>
        <div className="enter">
          <button>
            {
              !isLogin ?
                <NavLink to="/" >ورود به سامانه آموزشی</NavLink>
                :
                <NavLink to="/login" onClick={() => setIsLogin(false)}>خروج از حساب کاربری</NavLink>
            }
          </button>
        </div>
      </div>

      <div className="container">
        <div className={
          open ? "resnav open" : "resnav"
        }>
          <NavLink to="/" end>خانه</NavLink>
          <NavLink to="/educationCourses">دوره های آموزشی</NavLink>
          <NavLink to="/cooperation">همکاری با کاریار</NavLink>
          <NavLink to="/cooperation">استودیو کاریار</NavLink>
          <NavLink to="/about">درباره کاریار</NavLink>
          <NavLink to="/team">تیم کاریار</NavLink>
          <button>
            {
              !isLogin ?
                <NavLink to="/" >ورود به سامانه آموزشی</NavLink>
                :
                <NavLink to="/login" onClick={() => setIsLogin(false)}>خروج از حساب کاربری</NavLink>
            }
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
