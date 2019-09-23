import React from "react"
import Project from "./project";

let projectArray = [
  {
    project: "Webshop", 
    picture: "/static/webshop.png", 
    excerpt: "This is a webshop we created in our Javascript course", 
    link: "https://annazetterstrom.github.io/webshop/"
  },
  {
    project: "Frontend Project", 
    picture: "/static/frontend.png", 
    excerpt: "This is a website with tutorials in HTML, CSS, Javascript and Adobe XD", 
    link: "https://annazetterstrom.github.io/fend-tutorials/"
  },
  {
    project: "Html & CSS",
    picture: "/static/b3.jpg",
    excerpt: "This is....",
    link: "https://annazetterstrom.github.io/project/"
  }
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




