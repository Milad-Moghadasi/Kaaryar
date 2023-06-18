import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { loginContext } from "./LoginContext";

import "./app.scss";
import Layout from "./Layout/Layout.jsx";
import Login from "./pages/Login/Login.jsx";
import Home from "./pages/Home/Home";
import EducationCourses from "./pages/EducationCourses/EducationCourses";
import Cooperation from "./pages/Cooperation/Cooperation";
import Team from "./pages/About/Team";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";


function App() {
  const [isLogin] = useContext(loginContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/EducationCourses" element={<EducationCourses />} />
          <Route path="/Cooperation" element={<Cooperation />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/About" element={<About />} />
          <Route path="/Login" element={
            isLogin?
            <Navigate to="/" replace={true} />
            :
            <Login/>
          }/>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
