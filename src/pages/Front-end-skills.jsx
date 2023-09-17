import React, { useState, useEffect } from "react";
import css from "./Front-end-skills.module.css";

export default function FrontEndSkills() {
  const [scroll, setScroll] = useState(0);
  const screenWidth = window.screen.width;
  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <>
      <div className={css.front_end_skills}>
        <div className={css.Ch1}>
          <h1 className={css.Th1}>Front-end skills</h1>
        </div>
        <div className={css.Cskills}>
          <div className={css.skills1}>
            <h2 className={css.subtitle}>What I do ?</h2>
            <ul>
              <li className={css.liSkill1}>
                <h4 className={css.titleWhatIDo}>GitHub</h4>
                <p className={css.loremWhatIDo}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  vitae, quidem iste nisi iusto vero quos expedita natus eos sit
                  illum provident laborum ea architecto dolores dignissimos
                  doloremque ipsa autem?
                </p>
              </li>
              <li className={css.liSkill2}>
                <h4 className={css.titleWhatIDo}>HTML,CSS,JavaScript</h4>
                <p className={css.loremWhatIDo}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  vitae, quidem iste nisi iusto vero quos expedita natus eos sit
                  illum provident laborum ea architecto dolores dignissimos
                  doloremque ipsa autem?
                </p>
              </li>
              <li className={css.liSkill3}>
                <h4 className={css.titleWhatIDo}>Sass,React,Redux-Toolkit</h4>
                <p className={css.loremWhatIDo}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  vitae, quidem iste nisi iusto vero quos expedita natus eos sit
                  illum provident laborum ea architecto dolores dignissimos
                  doloremque ipsa autem?
                </p>
              </li>
            </ul>
          </div>
          <div className={css.skills2}>
            <h2 className={css.subtitle}>Coding Skills</h2>
            <ul>
              <li className={css.liLangueage}>
                <div className={css.divLangueageUse}>
                  <h4 className={css.titleLanguage}>HTML</h4>
                  <p className={css.pProsent}>100%</p>
                </div>
                <div className={css.lineBacround}>
                  <div
                    className={
                      screenWidth < 1112
                        ? scroll > 650 && css.lineProsent1
                        : css.lineProsent1
                    }
                  ></div>
                </div>
              </li>
              <li className={css.liLangueage}>
                <div className={css.divLangueageUse}>
                  <h4 className={css.titleLanguage}>CSS</h4>
                  <p className={css.pProsent}>80%</p>
                </div>
                <div className={css.lineBacround}>
                  <div
                    className={
                      screenWidth < 1112
                        ? scroll > 650 && css.lineProsent2
                        : css.lineProsent2
                    }
                  ></div>
                </div>
              </li>
              <li className={css.liLangueage}>
                <div className={css.divLangueageUse}>
                  <h4 className={css.titleLanguage}>React</h4>
                  <p className={css.pProsent}>75%</p>
                </div>
                <div className={css.lineBacround}>
                  <div
                    className={
                      screenWidth < 1112
                        ? scroll > 650 && css.lineProsent3
                        : css.lineProsent3
                    }
                  ></div>
                </div>
              </li>
              <li className={css.liLangueage}>
                <div className={css.divLangueageUse}>
                  <h4 className={css.titleLanguage}>JavaScript</h4>
                  <p className={css.pProsent}>50%</p>
                </div>
                <div className={css.lineBacround}>
                  <div
                    className={
                      screenWidth < 1112
                        ? scroll > 650 && css.lineProsent4
                        : css.lineProsent4
                    }
                  ></div>
                </div>
              </li>
              <li className={css.liLangueage}>
                <div className={css.divLangueageUse}>
                  <h4 className={css.titleLanguage}>Redux-Toolkit</h4>
                  <p className={css.pProsent}>40%</p>
                </div>
                <div className={css.lineBacround}>
                  <div
                    className={
                      screenWidth < 1112
                        ? scroll > 650 && css.lineProsent5
                        : css.lineProsent5
                    }
                  ></div>
                </div>
              </li>
              <li className={css.liLangueage}>
                <div className={css.divLangueageUse}>
                  <h4 className={css.titleLanguage}>Sass</h4>
                  <p className={css.pProsent}>30%</p>
                </div>
                <div className={css.lineBacround}>
                  <div
                    className={
                      screenWidth < 1112
                        ? scroll > 650 && css.lineProsent6
                        : css.lineProsent6
                    }
                  ></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
