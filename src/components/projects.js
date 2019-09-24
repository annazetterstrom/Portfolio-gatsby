import React from "react"
import Project from "./project";

let projectArray = [
  {
    project: "Kanye", 
    picture: "/kanye.jpg", 
    excerpt: "This is a website about Kanye West", 
    link: "https://focused-hodgkin-83d280.netlify.com/"
  },
  {
    project: "Webshop", 
    picture: "/webshop.png", 
    excerpt: "This is a webshop we created in our Javascript course", 
    link: "https://annazetterstrom.github.io/webshop/"
  },
  {
    project: "Frontend Project", 
    picture: "/frontend.png", 
    excerpt: "This is a website with tutorials in HTML, CSS, Javascript and Adobe XD", 
    link: "https://annazetterstrom.github.io/fend-tutorials/"
  },
]

export default () => {
  let projects = (
    projectArray.map((projectData, i) => {
      return (
       <Project 
         project= {projectData.project}
         picture= {projectData.picture}
         excerpt={projectData.excerpt}
         link= {projectData.link}
         key={'project'+i}
      /> )
    })
  )
  return (
    <div className="container">
      {projects}
    </div>
  );
} 




