import React from "react"
import Layout from "../components/layout"
import Projects from "../components/projects"
import Nav from "../components/nav"
import Resume from "../components/resume"
import Footer from "../components/footer"
import About from "../components/About"

const IndexPage = () => (
  <Layout >
    <Nav />
    <About />
    <Resume />

    <div className="projects-section">
      <h2 className="section-title">Projects</h2>
      <Projects/>
    </div>

    <Footer />
  </Layout>
)

export default IndexPage
