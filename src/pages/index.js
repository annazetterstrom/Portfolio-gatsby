import React from "react"
import Layout from "../components/Layout"
import Projects from "../components/Projects"
import Nav from "../components/Nav"
import Resume from "../components/Resume"
import Footer from "../components/Footer"
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
