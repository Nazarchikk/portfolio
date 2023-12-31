import { Route, Routes, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "../../pages/Home/Home.jsx";
import AboutMe from "../../pages/About-me/About-me.jsx";
import FronteEndSkills from "../../pages/Front-end-skills/Front-end-skills.jsx";
import MyProject from "../../pages/My-project/My-project.jsx";
import Contact from "../../pages/Contact/Contact.jsx";
import Loader from "../Loader/Loader.jsx";
import css from "./App.module.css";
export default function App() {
  const [status, setStatus] = useState("pending");
  useEffect(() => {
    setTimeout(() => {
      setStatus("rejected");
    }, 2000);
    setStatus("pending");
  }, []);
  if (status === "pending") {
    return <div className={css.divLoader}><Loader></Loader></div>
  }
  if (status === "rejected") {
    return (
      <div>
        <div className={css.wrapper}>
          <header>
            <nav>
              <div className={css.conLogo}>
                <NavLink to="/" className={css.logo}>
                </NavLink>
              </div>
              <div className={css.navbar}>
                <NavLink to="/" className={css.NavLinks}>
                  Home
                </NavLink>
                <NavLink to="/about-me" className={css.NavLinks}>
                  About me
                </NavLink>
                <NavLink to="/front-end-skills" className={css.NavLinks}>
                  Front-end_skills
                </NavLink>
                <NavLink to="/my-project" className={css.NavLinks}>
                  My-project
                </NavLink>
                <NavLink to="/contact" className={css.NavLinks}>
                  Contact
                </NavLink>
              </div>
            </nav>
          </header>
          <main>
            <Routes>
              <Route>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about-me" element={<AboutMe />}></Route>
                <Route
                  path="/front-end-skills"
                  element={<FronteEndSkills />}
                ></Route>
                <Route path="/my-project" element={<MyProject />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
              </Route>
            </Routes>
          </main>
          <footer>
            <div className={css.conection}>
              <NavLink
                to="https://instagram.com/na.zar4197?igshid=MmIzYWVlNDQ5Yg=="
                className={css.footerNLink}
              >
                Instagram
              </NavLink>
              <NavLink
                to="https://github.com/Nazarchikk"
                className={css.footerNLink}
              >
                GitHub
              </NavLink>
              <NavLink
                to="https://www.linkedin.com/in/%D0%BD%D0%B0%D0%B7%D0%B0%D1%80-%D0%BC%D0%B0%D1%80%D1%87%D0%B5%D0%BD%D0%BA%D0%BE-8931b8289"
                className={css.footerNLink}
              >
                Linkedin
              </NavLink>
              <NavLink
                to="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJZbjWGXjgpvrWchVrvkzfsrjnpCKxfNsljKqBpJZjtwhMBGJqLQwngvXjGtsNQqJJzhZSV"
                className={css.footerNLink}
              >
                Gmail
              </NavLink>
            </div>
            <div>
              <p className={css.text2023}>
                © 2023 | Nazarchikk
              </p>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}