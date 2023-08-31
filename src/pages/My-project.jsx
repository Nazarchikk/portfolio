import { NavLink } from "react-router-dom";
import css from "./My-project.module.css"

export default function MyProject() {
  return (
    <div className={css.mainDiv}>
        <div className={css.title}>
            <h1 className={css.titleText}>My-projects</h1>
        </div>
        <div>
            <div className={css.conClients}>
                <h2 className={css.titleClients}>Clients</h2>
                <p className={css.loremClients}>I don't have clients yet</p>
            </div>
            <div className={css.conGallery}>
                <h2 className={css.titleGallery}>Gallery projects</h2>
                <ul className={css.listProjects}>
                    <li className={css.site}>
                        <NavLink to="https://64f0b5182e5ef27844f186e5--dulcet-mooncake-7f1147.netlify.app/" ><button className={css.BVSite}>Visit the site</button></NavLink>
                    </li>
                    <li className={css.site}>
                        <NavLink to="https://andriihrytsei.github.io/project/"><button className={css.BVSite}>Visit the site</button></NavLink>
                    </li>
                    <li className={css.site}>
                        <NavLink to="https://andriihrytsei.github.io/event-booster/"><button className={css.BVSite}>Visit the site</button></NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
