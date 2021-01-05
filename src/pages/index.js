import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import Price from "../components/price"
import Main from "../components/main"
import About from "../components/about"
import Learn from "../components/learn"
import Educate from "../components/educate"

const IndexPage = () => (
  <Layout>
    <SEO title="Курс по маскам века" />
    <Main />
    <About />
    <Banner />
    <Learn />
    <Banner />
    <Price sectionId="price" priceHeader="Price"/>
    <Educate />
  </Layout>
)

export default IndexPage
