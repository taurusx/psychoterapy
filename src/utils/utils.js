const startsWith = (string, search) => {
  return string.substr(0, search.length) === search
}

const formatDate = timestamp => {
  const date = new Date(timestamp)
  const dayMonthFormatted = date.toLocaleDateString('pl-PL', {
    day: '2-digit',
    month: 'long',
  })
  const yearFormatted = date.toLocaleDateString('pl-PL', {
    year: 'numeric',
  })

  return `${dayMonthFormatted}, ${yearFormatted}`
}

export { startsWith, formatDate }
