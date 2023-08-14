import React, { useContext } from "react";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import styles from "./Experiences.module.css";

const Experiences = () => {
  const { newTheme } = useContext(ThemeContext);
  return (
    <div className={styles.Experiences}>
      <h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
        Experiences
      </h1>
      <div className={styles.borderBottom} />

      <div className={styles.container}>
        <div className={styles.position}>
          actyv.ai | Full Stack Web Developer (MERN){" "}
          <a href=""> Full Stack Development (MERN)</a>
        </div>
        <div className={styles.date}>November 2022 - Present</div>
        <fieldset className={styles.responsibilities}>
          <legend>
            <h3> Roles & responsibilities </h3>
          </legend>
          <ul>
            <li>Implementing paylater module in actyv.ai.</li>
            <li>Integration of bank with actyv platform.</li>
            {/* <li>
						Responding to breakdown ,malfunctions and analysis
							</li>
							<li>
							Etp operation and monitoring 

							</li> */}
          </ul>
        </fieldset>
      </div>

      <br />
    </div>
  );
};

export default Experiences;
