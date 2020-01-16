export const filterData = (data, text) => {
  const include = e => e.toString().toLowerCase().includes(text.toLowerCase())
  if (!!text) {
    return data.filter(e => include(e.author, text) || include(e.width, text) || include(e.height, text))
  } return data
}