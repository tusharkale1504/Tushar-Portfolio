import React from "react";

import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src="images\about\aboutImage.png"
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src="images\about\serverIcon.png" alt="Mobile App icon" />
            <div className={styles.aboutItemText}>
              <h3>Mobile App Developer</h3>
              <p>
                I specialize in building mobile applications using Flutter
                delivering seamless user experiences across iOS and Android platforms.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="images\about\cursorIcon.png" alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="images\about\uiIcon.png" alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>


        </ul>
      </div>
    </section>
  );
};
