import React from 'react'
const svgStyle = {
  verticalAlign: 'middle',
  fill: 'currentColor',
}

const Mail = props => (
  <svg
    viewBox="0 0 512 512"
    width={props.width}
    height={props.height}
    style={svgStyle}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z" />
  </svg>
)

Mail.defaultProps = {
  width: '48px',
  height: '48px',
}
export default Mail
