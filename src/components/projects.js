import React from "react"
import styles from "./project.module.css"

const Projects = props => (
  <div className={styles.projects}>
    <img src={props.picture} className={styles.picture} alt="" />
    <div className={styles.description}>
      <h2 className={styles.project}>{props.project}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
      <a href={props.link}>Go to project</a>
    </div>
  </div>
)

export default (props) => (
    <Projects
      project={props.project}
      picture={props.picture}
      excerpt={props.excerpt}
      link= {props.link}
    />

)
// projectArray.map((projectData, i) => {
//   return (
//    <Projects 
//      project= {projectData.project}
//      picture= {projectData.picture}
//      excerpt={projectData.excerpt}
//      link= {projectData.link}
//      key={'project'+i}
//   /> )
// })