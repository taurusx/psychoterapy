import { useEffect } from 'react'
import ReactDOM from 'react-dom'

const Portal = ({ children }) => {
  const portalRoot = document.getElementById('root-portal')

  const el = document.createElement('div')
  el.setAttribute('id', 'portal')

  // add or remove Portal from the DOM
  useEffect(() => {
    portalRoot.appendChild(el)
    return () => portalRoot.removeChild(el)
  }, [])

  return ReactDOM.createPortal(children, el)
}

export default Portal
