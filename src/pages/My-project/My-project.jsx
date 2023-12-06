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
                <p className={css.loremClients}>You will be my first client</p>
            </div>
            <div className={css.conGallery}>
                <h2 className={css.titleGallery}>Gallery projects</h2>
                <ul className={css.listProjects}>
                    <li className={css.site}>
                        <a href="https://endearing-toffee-1c8df9.netlify.app/"><button className={css.BVSite}>Visit the site</button></a>
                    </li>
                    <li className={css.site}>
                        <a href="https://nazarchikk.github.io/restaurant/" ><button className={css.BVSite}>Visit the site</button></a>
                    </li>
                    <li className={css.site}>
                        <a href="https://andriihrytsei.github.io/event-booster/"><button className={css.BVSite}>Visit the site</button></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
