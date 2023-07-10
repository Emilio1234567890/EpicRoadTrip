const { authJwt } = require("../middlewares");
const axios = require('axios');
const { response } = require("express");
const sdk = require('api')('@yelp-developers/v1.0#2vqu0dboldn2hxnb');

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept",
    );
    next();
  });

  app.get("/api/geogps/:city1/:city2", function (req, res) {
    const apiKey = 'dab6b64debba473c9f792f727566a184';
    const city1 = req.params.city1;
    const city2 = req.params.city2;

    // Use Promise.all to make parallel requests to the API for both cities
    Promise.all([
      axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${city1}&key=${apiKey}`),
      axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${city2}&key=${apiKey}`)
    ])
      .then(responses => {
        const results = responses.map(response => response.data.results[0]);
        // Extract the latitude and longitude for each city
        const point1 = [results[0].geometry.lng, results[0].geometry.lat];
        const point2 = [results[1].geometry.lng, results[1].geometry.lat];
        // Send the response
        // res.json({ [city1]: point1, [city2]: point2 });

        // Make a request to OpenRouteService API with the coordinates
        axios.post('https://api.openrouteservice.org/v2/directions/driving-car/geojson', {
          coordinates: [point1, point2],
          preference: 'recommended',
          units: 'km'
        }, {
          headers: {
            'Accept': 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8',
            'Authorization': 'Bearer 5b3ce3597851110001cf6248edbc294237c34f6b960190f4b9a6514c',
            'Content-Type': 'application/json; charset=utf-8'
          }
        })
          .then(response => {
            res.json(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
      });
  });

  app.get("/api/event/:postalCode", function (req, res) {
    const url = 'https://app.ticketmaster.com/discovery/v2/events.json';
const params = {
  apikey: 'RSXWZcBUDDxJvNmfS9TOPRBZFKHdtzMm',
  size: 1,
  postalCode: req.params.postalCode
};
const headers = {
  'X-Target-URI': 'https://app.ticketmaster.com'
};

axios.get(url, { params, headers })
  .then(response => {
    res.json(response.data);
    // Parse the response.
    // Do other things.
  })
  .catch(error => {
    console.error(error);
  });
      });
}