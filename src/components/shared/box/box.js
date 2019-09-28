import React from "react"
import PropTypes from "prop-types"

import "./box.scss"

const Box = ({ children, className }) => (
  <div className={"box " + className}>{children}</div>
)

Box.propTypes = {
  className: PropTypes.string,
}

Box.defaultProps = {
  className: ``,
}

export default Box
