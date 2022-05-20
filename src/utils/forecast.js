const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=2e5025a5116ca7329a754a9934c20b7d&query=${longitude},${latitude}&units=f`
  request({ url, json: true }, (err, { body }) => {
    if(err) {
      callback('Unable to connect to weather services!', undefined)
    } else if(body.error) {
      callback('Unable to find location. Try another search', undefined)
    } else {
      callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out. The humidity is ${body.current.humidity}%.`)
    }
  })
}

module.exports = forecast