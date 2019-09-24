import React from "react"
import Layout from "../components/layout"
import Projects from "../components/projects"
import Nav from "../components/nav"
import Content from "../components/content"
import Footer from "../components/footer"


const IndexPage = () => (
  <Layout >
    <Nav />
    <Content  />
    <div>
   {
    <Projects/>
   } 
  </div>
  <Footer />
  </Layout>
)
export default IndexPage
