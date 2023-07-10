const { authJwt } = require("../middlewares");
const axios = require('axios');
const { response } = require("express");
const User = require('../models/user.model');

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });

    app.post('/user/addhistory', async (req, res) => {
      const email = req.body.email;
      const locations = JSON.parse(req.body.location);
    
      try {
        // Find the user by email
        const user = await User.findOne({ email: email });
    
        if (!user) {
          // If the user is not found, return a 404 error
          return res.status(404).json({ message: 'User not found' });
        }
    
        // Add the new locations to the user's location array
        user.location.push(...locations);
    
        // Save the updated user document
        await user.save();
    
        // Return the updated user document as the response
        res.json(user);
      } catch (err) {
        // Handle any errors that occur
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
      }
    });

    app.post('/user/deletehistory', async (req, res) => {
      const email = req.body.email;
      const cities = req.body.cities;
    
      try {
        // Find the user by email
        const user = await User.findOne({ email: email });
    
        if (!user) {
          // If the user is not found, return a 404 error
          return res.status(404).json({ message: 'User not found' });
        }
    
        // Loop through each city to remove
        cities.forEach(city => {
          // Find the index of the location to remove
          const index = user.location.findIndex(location => location[0] === city);
    
          if (index !== -1) {
            // Remove the location from the user's location array
            user.location.splice(index, 1);
          }
        });
    
        // Save the updated user document
        await user.save();
    
        // Return the updated user document as the response
        res.json(user);
      } catch (err) {
        // Handle any errors that occur
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
      }
    });

    app.get('/user/getlocation', async (req, res) => {
      const email = req.body.email;
    
      try {
        // Find the user by email and select only the "location" field
        const user = await User.findOne({ email: email }).select('location');
    
        if (!user) {
          // If the user is not found, return a 404 error
          return res.status(404).json({ message: 'User not found' });
        }
    
        // Return the user's location data as the response
        res.json(user.location);
      } catch (err) {
        // Handle any errors that occur
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
      }
    });
    
    
}