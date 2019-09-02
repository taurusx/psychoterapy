import { useEffect, useRef, useState } from 'react'

const useIntersect = ({ root = null, rootMargin, threshold = 0 }) => {
  const [entry, updateEntry] = useState({})
  const [node, setNode] = useState(null)

  const observer =
    // Check for window object for SSR
    typeof window !== 'undefined' &&
    useRef(
      // Destructurize to get one entry - this hook observes only one node
      new window.IntersectionObserver(([entry]) => updateEntry(entry), {
        root,
        rootMargin,
        threshold,
      })
    )

  if (!observer) return [setNode, null]

  useEffect(() => {
    const { current: currentObserver } = observer
    currentObserver.disconnect()

    if (node) currentObserver.observe(node)

    return () => currentObserver.disconnect()
  }, [node])

  return [setNode, entry]
}

export default useIntersect
