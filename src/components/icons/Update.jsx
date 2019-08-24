import React from 'react'
const svgStyle = {
  verticalAlign: 'middle',
  fill: 'currentColor',
}

const Update = props => (
  <svg
    viewBox="0 0 24 24"
    width={props.width}
    height={props.height}
    style={svgStyle}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path id="update_svg__a" d="M0 0h24v24H0V0z" />
    </defs>
    <clipPath id="update_svg__b">
      <use xlinkHref="#update_svg__a" overflow="visible" />
    </clipPath>
    <path
      clipPath="url(#update_svg__b)"
      d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1a6.875 6.875 0 000 9.79 7.02 7.02 0 009.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58a8.987 8.987 0 0112.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"
    />
  </svg>
)

Update.defaultProps = {
  width: '48px',
  height: '48px',
}
export default Update
