import React from 'react'
const svgStyle = {
  verticalAlign: 'middle',
  fill: 'currentColor',
}

const Dashboard = props => (
  <svg
    viewBox="0 0 24 24"
    width={props.width}
    height={props.height}
    style={svgStyle}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
  </svg>
)

Dashboard.defaultProps = {
  width: '48px',
  height: '48px',
}
export default Dashboard
