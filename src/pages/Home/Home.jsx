import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Home.module.css";
export default function Home() {
  return (
    <div className={css.home}>
      <div className={css.photo}>
        <img
          src="https://cdn.pixabay.com/photo/2023/07/25/18/42/vector-graphic-8149677_1280.jpg"
          alt="My_Photo_In_Car"
          className={css.imageHome}
        />
      </div>
      <div>
        <p className={css.frd}>Front-end Developer</p>
        <h1 className={css.h1Home}>Nazar</h1>
        <p className={css.lorem}>
          Are you in need of a website? When I create websites, I ensure that
          the final product matches the provided layout precisely. Additionally,
          I guarantee impeccable technical functionality to ensure everything
          operates as intended. If you're interested in viewing my portfolio or
          learning more about my experience, feel free to reach out to me!
        </p>
        <div className={css.divButtons}>
          <NavLink to="/my-project">
            <button className={css.Hbutton}>My-project</button>
          </NavLink>
          <NavLink to="/contact" className={css.linkButton}>
            <button className={css.Hbutton}>Contact</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
