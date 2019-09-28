import React from "react"
import PropTypes from "prop-types"

import "./progress.scss"

const ProgressBar = ({ percent }) => (
  <div className="progress-bar">
    <div className="progress-bar__inner" style={{ width: percent + "%" }}>
      <div className="inner-effect"></div>
    </div>
  </div>
)

ProgressBar.propTypes = {
  percent: PropTypes.string,
}

ProgressBar.defaultProps = {
  percent: ``,
}

export default ProgressBar
