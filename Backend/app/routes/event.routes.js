
const axios = require('axios');
const { response } = require('express');

module.exports = function(app) {
    app.use(function (req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Content-Type, Accept",
        );
        next();
      });

    const url= "https://api.predicthq.com/v1/events/?country=FR&limit=40&offset=40"

    app.get("/api/events", function(req, res) {
      const headers = {
        'Accept': 'application/json',
        'Authorization': 'Bearer 5-XtonBRV9scM-pc5NfN4sTRSvXmzLpnd9WNdAIK',
        'Content-Type': 'application/json',
        
      }
      axios.get(url, {headers})
        .then(response => {
          res.json(response.data);
        })
        .catch(error => {
          console.log(error);
          res.status(500).send('An error occurred');
        })
    });

    

    app.get ("/api/events/:category", function(req, res){
      const headers = {
        'Accept': 'application/json',
        'Authorization': 'Bearer 5-XtonBRV9scM-pc5NfN4sTRSvXmzLpnd9WNdAIK',
        'Content-Type': 'application/json',
        
      }
      const params = {
        category: req.params.category,
      }

      axios.get(url, {params,headers})
        .then(response => {
          res.json(response.data);
        })
        .catch(error => {
          console.log(error);
          res.status(500).send('An error occurred');
        })

    })

};