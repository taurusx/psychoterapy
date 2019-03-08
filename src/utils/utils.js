const startsWith = (string, search) => {
  return string.substr(0, search.length) === search
}

export { startsWith }