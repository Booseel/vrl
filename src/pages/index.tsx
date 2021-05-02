import React from "react"

import Layout from "../components/layout"
import { Banner } from "../components/banner"
import Price from "../components/price"
import { Main } from "../components/main"
import About from "../components/about"
import Author from "../components/author"
import Learn from "../components/learn"
import Educate from "../components/educate"

import ToTop from "../common/toTop"

const IndexPage = () => (
  <Layout>
    <Main />
    <About />
    <Author />
    <Banner />
    <Learn />
    <Banner />
    <Price />
    <Educate />
    <ToTop />
  </Layout>
)

export default IndexPage
