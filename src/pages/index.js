import React from "react"
import Layout from "../components/App/layout"
import Navbar from "../components/Index/Navbar/Navbar"
import MainBanner from "../components/Index/Banner/MainBanner"
import About from "../components/Index/About/About"
import WhatIDo from "../components/Index/Feature/Feature"
import Paragraph from "../components/Index/Paragraph/Paragraph"
import Footer from "../components/Index/Footer"
import Contact from "../components/Index/Contact/Contact"

const IndexPage = () => (
  <Layout>
    <Navbar />
    <div className="main-area">
      <MainBanner />
      <About />
      <WhatIDo />
      <Paragraph />
      <Contact />
      <Footer />
    </div>
  </Layout>
)

export default IndexPage
