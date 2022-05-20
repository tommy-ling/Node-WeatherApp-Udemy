const request = require('request')

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoidG9tbXlsaW5nNzkiLCJhIjoiY2wzYTFuajc1MDE5bjNib3VodDFlM2FsNiJ9.vVkiPQ9E21UgkZP34PUWYA&limit=1&fuzzyMatch=false`

  request({ url, json: true }, (err, { body }) => {
    if(err) {
      callback('Unable to connect to location services!', undefined)
    } else if(body.features.length === 0) {
      callback('Unable to find location. Try another search', undefined)
    } else {
      const latitude = body.features[0].center[1]
      const longitude = body.features[0].center[0]
      callback(undefined, { latitude, longitude, location: body.features[0].place_name })
    }
  })
}

module.exports = geocode