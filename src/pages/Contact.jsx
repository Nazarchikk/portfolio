/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import css from "./Contact.module.css"
export default function contact() {
  return (
    <div className={css.mainDiv}>
      <div className={css.titleContact}>
        <h1 className={css.textContact}>Contact</h1>
      </div>
      <div>
        <div className={css.divLocation}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.3470928148067!2d32.26176137643961!3d48.507410625341905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d043a9e7578e93%3A0x14b3eacf69d7cc46!2zRGVwb3QgY2VudGVyIGJyYWJyYWJyYSDQmtGA0L7Qv9C40LLQvdC40YbRjNC60LjQuQ!5e0!3m2!1suk!2sua!4v1693512750133!5m2!1suk!2sua" width="1000" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div>
          <div>
            <ul className={css.listContacts}>
              <li className={css.liPhone}>
                <h3 className={css.listContact}>099-986-78-68</h3>
                <p className={css.loremListContact}>This is my number that you can call from 8 a.m. to 10 p.m</p> 
              </li>
              <li className={css.liLocation}>
                <h3 className={css.listContact}>Ukraine.Kropivnizkiy</h3>
                <p className={css.loremListContact}>This is the city in which I currently live</p> 
              </li>
              <li className={css.liEmail}>
                <h3 className={css.listContact}>karffffagen@gmail.com</h3>
                <p className={css.loremListContact}>This is my main email, which you can use to write to me, but it is better to use social media</p>               
              </li>
            </ul>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}
