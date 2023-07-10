const { authJwt } = require("../middlewares");
const axios = require('axios');
const sdk = require('api')('@yelp-developers/v1.0#2vqu0dboldn2hxnb');

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept",
        // "Authorization": "Bearer DRz84X8wSdUU1x7y6ZdvSPmhmXLn6EtG6iz30B4wth5vWLy0RXUk7ywxwIE9OTy_eRhI78H7g9f_u3WWvqzpNAhv601ftNYzo_rUmCRBOf2Geu-jzG9R_afPZsX0Y3Yx"
      );
      next();
    });
    app.post("/api/places/bar", function(req, res) {
        sdk.auth('Bearer DRz84X8wSdUU1x7y6ZdvSPmhmXLn6EtG6iz30B4wth5vWLy0RXUk7ywxwIE9OTy_eRhI78H7g9f_u3WWvqzpNAhv601ftNYzo_rUmCRBOf2Geu-jzG9R_afPZsX0Y3Yx');
        sdk.v3_business_search({location: req.body.city + ' ' + req.body.postalcode, categories: 'bars', sort_by: 'best_match', limit: '50'})
        .then(resp => {res.status(200).send(resp.data)})
        .catch(error => res.send({ success: false, message: error.message }))
    });
    app.post("/api/places/bar/:price", function(req, res) {
        sdk.auth('Bearer DRz84X8wSdUU1x7y6ZdvSPmhmXLn6EtG6iz30B4wth5vWLy0RXUk7ywxwIE9OTy_eRhI78H7g9f_u3WWvqzpNAhv601ftNYzo_rUmCRBOf2Geu-jzG9R_afPZsX0Y3Yx');
        sdk.v3_business_search({location: req.body.city + ' ' + req.body.postalcode, categories: 'bars', sort_by: 'best_match', limit: '50', price:''})
        .then(resp => {res.status(200).send(resp.data)})
        .catch(error => res.send({ success: false, message: error.message }))
    });
    app.post("/api/places/restau", function(req, res) {
        sdk.auth('Bearer DRz84X8wSdUU1x7y6ZdvSPmhmXLn6EtG6iz30B4wth5vWLy0RXUk7ywxwIE9OTy_eRhI78H7g9f_u3WWvqzpNAhv601ftNYzo_rUmCRBOf2Geu-jzG9R_afPZsX0Y3Yx');
        sdk.v3_business_search({location: req.body.city + ' ' + req.body.postalcode, categories: 'restaurants', sort_by: 'best_match', limit: '50'})
        .then(resp => {res.status(200).send(resp.data)})
        .catch(error => res.send({ success: false, message: error.message }))
    });

    app.post("/api/places/hotel", function(req, res) {
        sdk.auth('Bearer DRz84X8wSdUU1x7y6ZdvSPmhmXLn6EtG6iz30B4wth5vWLy0RXUk7ywxwIE9OTy_eRhI78H7g9f_u3WWvqzpNAhv601ftNYzo_rUmCRBOf2Geu-jzG9R_afPZsX0Y3Yx');
        sdk.v3_business_search({location: req.body.city + ' ' + req.body.postalcode, categories: 'hotels', sort_by: 'best_match', limit: '50'})
        .then(resp => {res.status(200).send(resp.data)})
        .catch(error => res.send({ success: false, message: error.message }))
    });

    app.post("/api/places/historical", function(req, res) {
        sdk.auth('Bearer DRz84X8wSdUU1x7y6ZdvSPmhmXLn6EtG6iz30B4wth5vWLy0RXUk7ywxwIE9OTy_eRhI78H7g9f_u3WWvqzpNAhv601ftNYzo_rUmCRBOf2Geu-jzG9R_afPZsX0Y3Yx');
        sdk.v3_business_search({location: req.body.city + ' ' + req.body.postalcode, categories: 'landmarks', sort_by: 'best_match', limit: '50'})
        .then(resp => {res.status(200).send(resp.data)})
        .catch(error => res.send({ success: false, message: error.message }))
    });

    app.get("/api/test/restau", function(req, res) {
        axios.get('https://www.jsonkeeper.com/b/B43N', {
        })
        .then(resp => {res.status(200).send(resp.data)})
        .catch(error => res.send({ success: false, message: error.message }))
    });

    app.get("/api/test/bar", function(req, res) {
        axios.get('https://www.jsonkeeper.com/b/ZYZH', {
        })
        .then(resp => {res.status(200).send(resp.data)})
        .catch(error => res.send({ success: false, message: error.message }))
    });

    app.get("/api/test/hotel", function(req, res) {
        axios.get('https://www.jsonkeeper.com/b/3OS9', {
        })
        .then(resp => {res.status(200).send(resp.data)})
        .catch(error => res.send({ success: false, message: error.message }))
    });

    app.get("/api/test/historical", function(req, res) {
        axios.get('https://www.jsonkeeper.com/b/8GQF', {
        })
        .then(resp => {res.status(200).send(resp.data)})
        .catch(error => res.send({ success: false, message: error.message }))
    });

    app.get("/api/station/:city", function(req, res) {
        axios.get('https://www.data.economie.gouv.fr/api/records/1.0/search/?dataset=prix-carburants-fichier-quotidien-test-ods&q=&facet=horaires_automate_24_24&refine.com_arm_name=' + req.params.city, {
        })
        .then(resp => {res.status(200).send(resp.data)})
        .catch(error => res.send({ success: false, message: error.message }))
    });
}