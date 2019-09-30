/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { fas, faAt, faMapPin  } from '@fortawesome/free-solid-svg-icons'

import "./layout.scss"

library.add(fab, fas, faGithub, faLinkedin, faStackOverflow, faAt, faMapPin)

const Layout = ({ children }) => {
  return (
      <main className="main-container">{children}</main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
