import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Projects from "../components/projects"



let projectArray = [
  {project: "Webshop", picture: "/static/webshop.png", excerpt: "This is a webshop we created in our Javascript course", link: "https://annazetterstrom.github.io/webshop/"},
  {project: "Frontend Project", picture: "/static/frontend.png", excerpt: "This is a website with tutorials in HTML, CSS, Javascript and Adobe XD", link: "https://annazetterstrom.github.io/fend-tutorials/"}
]
const IndexPage = () => (
  <Layout>
    <h1>This is my portfolio</h1>
    <p>Below you can see my.</p>
    <div>
   {
     projectArray.map((projectData, i) => {
       return (
        <Projects 
          project= {projectData.project}
          picture= {projectData.picture}
          excerpt={projectData.excerpt}
          link= {projectData.link}
          key={'project'+i}
       /> )
     })
   } 
  </div>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
  </Layout>
)
export default IndexPage
