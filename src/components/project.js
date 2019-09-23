import React from "react"; 
import styles from "./project.module.css";

export default props => (
    <div className={`${styles.projects} header`} >
      <img src={props.picture} className={styles.picture} alt="pic"/>
      <div className={styles.description}>
        <h2 className={styles.project}>{props.project}</h2>
        <p className={styles.excerpt}>{props.excerpt}</p>
        <a href={props.link}>Go to project</a>
      </div>
    </div>
)