import React from 'react'
import css from "./About-me.module.css"

export default function AboutMe() {
  return (
    <div className={css.about}>
        <div className={css.photo}>
          <div className={css.imageAbout_me}>
          </div>
        </div>
        <div>
            <h1 className={css.hi}>Hi Guys</h1>
            <p className={css.about_me}>My name is Nazar. I am 16 years old. I live in Kropyvnytskyi. I am a beginning Front-end Developer. I am learning from GoIt.
                I am taking a Front-end Developer course. I have a couple of my projects and a couple with the team. If you want to see them, go to My-project
            </p>
        </div>
    </div>
  )
}
