import React from "react"

import Maps from "../shared/maps/maps"
import Box from "../shared/box/box"

import "./location-box.scss"

const LocationBox = () => (
  <Box className="location-container white">
    <Maps cityname="Santos,Brazil" width="100%" height="250px" />
  </Box>
)

export default LocationBox
