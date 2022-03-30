import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image';
import Zoom from 'react-medium-image-zoom'

import './style.css'
import 'react-medium-image-zoom/dist/styles.css'

const wrapperStyle = {
  width: '100%',
  height: '100%'
}

const ImageZoom = (props) => {
  return (
    <Zoom>
      <GatsbyImage style={wrapperStyle} {...props} />
    </Zoom>
  )
}

export default ImageZoom