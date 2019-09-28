import React from "react"
import PropTypes from "prop-types"

const Maps = ({ height, width, cityname }) => (
  <iframe
    width={width}
    height={height}
    title="Find me"
    id="gmap_canvas"
    src={`https://maps.google.com/maps?q=${escape(
      cityname
    )}&t=&z=11&ie=UTF8&iwloc=&output=embed`}
    frameBorder="0"
    scrolling="no"
    marginHeight="0"
    marginWidth="0"
  ></iframe>
)

Maps.propTypes = {
  cityname: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
}

Maps.defaultProps = {
  cityname: ``,
  height: ``,
  width: ``,
}

export default Maps
