import React from 'react'
import { NavLink } from "react-router-dom";
import css from "./Home.module.css"
export default function Home() {
  return (
    <div className={css.home}>
        <div className={css.photo}>
            <img src="https://cdn.pixabay.com/photo/2023/07/25/18/42/vector-graphic-8149677_1280.jpg" alt="My_Photo_In_Car"/>
        </div>
        <div>
            <p className={css.frd}>Front-end Developer</p>
            <h1>Nazar</h1>
            <p className={css.lorem}>Do you need to create a website? When creating sites, I provide the same site as the layout. I also guarantee a perfect technical aspect so that everything works exactly as it should. If you are interested in my portfolio or experience - write to me!</p>
            <div className={css.divButtons}>
              <NavLink to="/my-project"><button className={css.Hbutton}>My-project</button></NavLink>
              <NavLink to="/contact"><button className={css.Hbutton}>Kontakt</button></NavLink>
            </div>
        </div>
    </div>
  )
}
