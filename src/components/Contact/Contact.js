import React from "react";

import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="images/contact/emailIcon.png" alt="Email icon" />
          <a href="kaletushar2003@gmail.com">kaletushar2003@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src="images/contact/linkedinIcon.png"
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">linkedin.com/tusharkale</a>
        </li>
        <li className={styles.link}>
          <img src="images/contact/githubIcon.png" alt="Github icon" />
          <a href="https://github.com/tusharkale1504">github.com/tusharkale1504</a>
        </li>
      </ul>
    </footer>
  );
};
