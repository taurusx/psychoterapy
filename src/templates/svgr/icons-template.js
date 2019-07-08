function template(
  { template },
  opts,
  { imports, componentName, props, jsx, exports }
) {
  // Remove 'Svg' and 'Ion'/'Wi' from SvgIonComponentName:
  const matchName = componentName.name.match(/^(?:svg)(.*)$/i)
  const customName = matchName[1]
  exports.declaration.name = customName // eslint-disable-line

  return template.ast`${imports}

  const svgStyle = { 
    verticalAlign: 'middle', 
    fill: 'currentColor',    
  }
  
  const ${customName} = (${props}) => ${jsx}

  ${customName}.defaultProps = {
    width: '48px',
    height: '48px',
  }

  ${exports}
`
}
module.exports = template
