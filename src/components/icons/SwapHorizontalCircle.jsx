import React from 'react'
const svgStyle = {
  verticalAlign: 'middle',
  fill: 'currentColor',
}

const SwapHorizontalCircle = props => (
  <svg
    viewBox="0 0 24 24"
    width={props.width}
    height={props.height}
    style={svgStyle}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0V0z" />
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10zm-7-5.5l3.5 3.5-3.5 3.5V11h-4V9h4V6.5zm-6 11L5.5 14 9 10.5V13h4v2H9v2.5z" />
  </svg>
)

SwapHorizontalCircle.defaultProps = {
  width: '48px',
  height: '48px',
}
export default SwapHorizontalCircle
