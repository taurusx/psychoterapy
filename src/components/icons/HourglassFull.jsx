import React from 'react'
const svgStyle = {
  verticalAlign: 'middle',
  fill: 'currentColor',
}

const HourglassFull = props => (
  <svg
    viewBox="0 0 24 24"
    width={props.width}
    height={props.height}
    style={svgStyle}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6z" />
    <path fill="none" d="M0 0h24v24H0V0z" />
  </svg>
)

HourglassFull.defaultProps = {
  width: '48px',
  height: '48px',
}
export default HourglassFull
