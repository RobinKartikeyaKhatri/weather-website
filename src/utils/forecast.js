const request = require("request");



const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/80518481f86abfa9dcb41a384f367dfd/' + latitude + ',' + longitude;
    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback("Unable to connect to weather service!", undefined)
        } else if (body.error) {
            callback("Unable to find location", undefined);
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability  + '%  chance of rain.');
        }
    });

}

module.exports = forecast;