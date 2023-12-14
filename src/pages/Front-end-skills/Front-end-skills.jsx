import React, { useState, useEffect } from "react";
import CountUp from 'react-countup';
import SVGS from '../../images/lengue/symbol-defs.svg'
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
            <h2 className={css.subtitle}>I Know</h2>
            <ul className={css.loremSvgs}>
              <li>
                <svg className={css.svgTeg}>
                  <use href={`${SVGS}#icon-html5`}></use>
                </svg>
              </li>
              <li>
                <svg className={css.svgTeg}>
                  <use href={`${SVGS}#icon-css3`}></use>
                </svg>
              </li>
              <li>
                <svg className={css.svgTeg}>
                  <use href={`${SVGS}#icon-javascript`}></use>
                </svg>
              </li>
              <li>
                <svg className={css.svgTeg}>
                  <use href={`${SVGS}#icon-react`}></use>
                </svg>
              </li>
              <li>
                <svg className={css.svgTeg}>
                  <use href={`${SVGS}#icon-redux`}></use>
                </svg>
              </li>
              <li>
                <svg className={css.svgTeg}>
                  <use href={`${SVGS}#icon-sass`}></use>
                </svg>
              </li>
              <li>
                <svg className={css.svgTeg}>
                  <use href={`${SVGS}#icon-bootstrap`}></use>
                </svg>
              </li>
              <li>
                <svg className={css.svgTeg}>
                  <use href={`${SVGS}#icon-github`}></use>
                </svg>
              </li>
              <li>
                <svg className={css.svgTeg}>
                  <use href={`${SVGS}#icon-git`}></use>
                </svg>
              </li>
            </ul>
          </div>
          <div className={css.skills2}>
            <h2 className={css.subtitle}>Coding Skills</h2>
            <ul>
              <li className={css.liLangueage}>
                <div className={css.divLangueageUse}>
                  <h4 className={css.titleLanguage}>HTML</h4>
                  <p className={css.pProsent}>{screenWidth < 1112 ? scroll > 200 && <CountUp start={0} end={70} delay={0.2} duration={5.2}></CountUp>
                        : <CountUp start={0} end={70} delay={0.2} duration={5.2}></CountUp>}%</p>
                </div>
                <div className={css.lineBacround}>
                  <div
                    className={
                      screenWidth < 1112
                        ? scroll > 200 && css.lineProsent1
                        : css.lineProsent1
                    }
                  ></div>
                </div>
              </li>
              <li className={css.liLangueage}>
                <div className={css.divLangueageUse}>
                  <h4 className={css.titleLanguage}>CSS</h4>
                  <p className={css.pProsent}>{screenWidth < 1112 ? scroll > 200 && <CountUp start={0} end={65} delay={0.2} duration={5.2}></CountUp>
                        : <CountUp start={0} end={65} delay={0.2} duration={5.2}></CountUp>}%</p>
                </div>
                <div className={css.lineBacround}>
                  <div
                    className={
                      screenWidth < 1112
                        ? scroll > 200 && css.lineProsent2
                        : css.lineProsent2
                    }
                  ></div>
                </div>
              </li>
              <li className={css.liLangueage}>
                <div className={css.divLangueageUse}>
                  <h4 className={css.titleLanguage}>React</h4>
                  <p className={css.pProsent}>{screenWidth < 1112 ? scroll > 200 && <CountUp start={0} end={60} delay={0.2} duration={5.2}></CountUp>
                        : <CountUp start={0} end={60} delay={0.2} duration={5.2}></CountUp>}%</p>
                </div>
                <div className={css.lineBacround}>
                  <div
                    className={
                      screenWidth < 1112
                        ? scroll > 200 && css.lineProsent3
                        : css.lineProsent3
                    }
                  ></div>
                </div>
              </li>
              <li className={css.liLangueage}>
                <div className={css.divLangueageUse}>
                  <h4 className={css.titleLanguage}>JavaScript</h4>
                  <p className={css.pProsent}>{screenWidth < 1112 ? scroll > 200 && <CountUp start={0} end={55} delay={0.2} duration={5.2}></CountUp>
                        : <CountUp start={0} end={55} delay={0.2} duration={5.2}></CountUp>}%</p>
                </div>
                <div className={css.lineBacround}>
                  <div
                    className={
                      screenWidth < 1112
                        ? scroll > 200 && css.lineProsent4
                        : css.lineProsent4
                    }
                  ></div>
                </div>
              </li>
              <li className={css.liLangueage}>
                <div className={css.divLangueageUse}>
                  <h4 className={css.titleLanguage}>Redux-Toolkit</h4>
                  <p className={css.pProsent}>{screenWidth < 1112 ? scroll > 200 && <CountUp start={0} end={55} delay={0.2} duration={5.2}></CountUp>
                        : <CountUp start={0} end={55} delay={0.2} duration={5.2}></CountUp>}%</p>
                </div>
                <div className={css.lineBacround}>
                  <div
                    className={
                      screenWidth < 1112
                        ? scroll > 200 && css.lineProsent5
                        : css.lineProsent5
                    }
                  ></div>
                </div>
              </li>
              <li className={css.liLangueage}>
                <div className={css.divLangueageUse}>
                  <h4 className={css.titleLanguage}>Sass</h4>
                  <p className={css.pProsent}>{screenWidth < 1112 ? scroll > 200 && <CountUp start={0} end={50} delay={0.2} duration={5.2}></CountUp>
                        : <CountUp start={0} end={50} delay={0.2} duration={5.2}></CountUp>}%</p>
                </div>
                <div className={css.lineBacround}>
                  <div
                    className={
                      screenWidth < 1112
                        ? scroll > 200 && css.lineProsent6
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
