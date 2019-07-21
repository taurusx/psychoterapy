import React from 'react'
const svgStyle = {
  verticalAlign: 'middle',
  fill: 'currentColor',
}

const EmocjaLogoButterfly = props => (
  <svg
    viewBox="0 0 49 35"
    width={props.width}
    height={props.height}
    style={svgStyle}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path d="M22.821 7.469S21.687 1.803.456.745c.533 5.352 5.393 16.275 9.795 16.762 3.77-2.43 12.535-7.637 12.535-7.637l.035-2.401z" />
    <path d="M22.857 26.887s2.356 6.244-22.43 7.367c.277-2.33 2.248-13.07 9.823-16.766 4.582-2.996 12.57-7.955 12.535-7.78-.03.174.072 17.179.072 17.179zM26.18 27.521s1.133 5.688 22.365 6.732c-.533-5.346-5.393-16.264-9.793-16.766-3.771 2.434-12.535 7.645-12.535 7.645l-.037 2.389z" />
    <path d="M26.137 8.111S23.787 1.872 48.573.745c-.277 2.321-2.246 13.067-9.82 16.762-4.582 3.002-12.572 7.958-12.535 7.778.026-.178-.081-17.174-.081-17.174z" />
  </svg>
)

EmocjaLogoButterfly.defaultProps = {
  width: '48px',
  height: '48px',
}
export default EmocjaLogoButterfly
