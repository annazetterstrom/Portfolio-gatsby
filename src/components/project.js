import React from "react"; 
// import React, { Component } from 'react'
import styles from "./project.module.css";

export default props => (
    <div className={styles.projects} >
      <img src={props.picture} className={styles.picture} alt="pic"/>
      <div className={styles.description}>
        <h2 className={styles.project}>{props.project}</h2>
        <p className={styles.excerpt}>{props.excerpt}</p>
        <a href={props.link}>Go to project</a>
      </div>
    </div>
)

// class Project extends Component {
//   constructor(props){
//     this.props = props
//   }
//     render() {
//         return (
//                 <div className={styles.projects} >
//                   <img src={this.props.picture} className={styles.picture} alt="pic"/>
//                   <div className={styles.description}>
//                   <h2 className={styles.project}>{this.props.project}</h2>
//                   <p className={styles.excerpt}>{this.props.excerpt}</p>
//                   <a href={this.props.link}>Go to project</a>
//                   </div>
//                 </div>
//         )
//     }
// }

// export default Project
