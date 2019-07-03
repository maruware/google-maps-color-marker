const baseUrl = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|'

export const getColorMarkerUrl = (color) => {
  return baseUrl + color
}
