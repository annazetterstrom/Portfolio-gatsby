import React from "react"
import Layout from "../components/layout"
import Projects from "../components/projects"
import Nav from "../components/nav"
import Content from "../components/content"
import Footer from "../components/footer"


const IndexPage = () => (
  <Layout >
    <Nav />
    <Content  id="resume"/>
    <div>
   {
    <Projects id="projects"/>
   } 
  </div>
  <Footer id="contact"/>
  </Layout>
)
export default IndexPage
