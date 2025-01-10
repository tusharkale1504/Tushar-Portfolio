import React from "react";

import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Tushar</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 1 year of experience using FLutter, Angular and
          NodeJS.
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src="images/hero/myProfile.png"
        alt="Hero image of me"
        className={styles.heroImg}
      />  
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
