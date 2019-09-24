import React from "react"
import Layout from "../components/layout"
import Projects from "../components/projects"
import Nav from "../components/nav"
import Resume from "../components/resume"
import Footer from "../components/footer"

const IndexPage = () => (
  <Layout >
    <Nav />
    <Resume />

    <div className="projects-section">
      <h2 className="section-title">Projects</h2>
      <Projects/>
    </div>

    <Footer />
  </Layout>
)

export default IndexPage
