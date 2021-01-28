/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
//import { useStaticQuery, graphql } from "gatsby"
import { ParallaxProvider } from 'react-scroll-parallax';

import Menu from "./menu"
import Footer from "./footer"
//import "./layout.css"

const Layout = ({ children }) => {
  /*const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)*/

  return (
    <ParallaxProvider>
      <header className="header">
        <Menu />
      </header>
      <main>{children}</main>
      <footer className="bg_gradient_secondary">        
        <Footer />
      </footer>
    </ParallaxProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
