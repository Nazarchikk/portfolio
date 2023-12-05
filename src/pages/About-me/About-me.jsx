import React from "react";
import css from "./About-me.module.css";

export default function AboutMe() {
  return (
    <div className={css.about}>
      <div className={css.photo}>
        <div className={css.imageAbout_me}></div>
      </div>
      <div>
        <h1 className={css.hi}>Hi Guys</h1>
        <p className={css.about_me}>
          My name is Nazar, and I'm 16 years old. I reside in Kropyvnytskyi. I
          am an aspiring front-end developer currently enrolled in the Front-End
          Developer course at GoIt. I have worked on a few individual projects
          and collaborated on some team projects. If you're interested in
          viewing them, please check out the "My Projects" section.
        </p>
      </div>
    </div>
  );
}
