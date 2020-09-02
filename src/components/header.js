import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({}) => (
  <header
    style={{
      background: `transparent`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        display: `flex`,
        justifyContent: `space-between`,
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Link
        to="/"
        style={{
          color: `red`,
          textDecoration: `none`,
        }}
      >
        hello
      </Link>
      <Link
        to="/"
        style={{
          color: `red`,
          textDecoration: `none`,
        }}
      >
        hello
      </Link>
      <Link
        to="/"
        style={{
          color: `red`,
          textDecoration: `none`,
        }}
      >
        hello
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
