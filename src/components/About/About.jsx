import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img className={styles.aboutImage} src={getImageUrl("about/aboutImage.png")} alt="Me sitting with a laptop"/>
        </div>
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon"/>
                <div className={styles.aboutItemText}>
                    <h3>App Developer</h3>
                    <p>I'm an app developer with experience in building mobile apps on iOS using Swift, and on Android using Flutter</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/serverIcon.png")} alt="Server icon"/>
                <div className={styles.aboutItemText}>
                    <h3>Backend Developer</h3>
                    <p>I have experience building AI Web products using Python and PostgresQL</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/uiIcon.png")} alt="UI icon"/>
                <div className={styles.aboutItemText}>
                    <h3>Web Developer</h3>
                    <p>I have built websites using ReactJS and Flutter Web</p>
                </div>
            </li>
        </ul>
    </section>;
} 