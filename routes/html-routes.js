// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");
const db = require("../models");
const express = require("express");
const router = express.Router();

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    // res.sendFile(path.join(__dirname, "../public/signup.html"));
    res.render("signup");
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    // res.sendFile(path.join(__dirname, "../public/login.html"));
    res.render("login");
  });

  const testobject = [
    {
      id: 1,
      title: "11 home school essentials",
      body: "Good video from a mom of pre-k and toddlers - covers 11 home school essentials.  Check it out.",
      link: "https://www.youtube.com/watch?v=qPfhQQTm2-I",
      category: "General",
      district: "Guilford County Schools",
      school: "Millis Road Elementary",
      grade: "K",
      createdAt: "2020-08-25T04:06:55.000Z",
      updatedAt: "2020-08-25T04:06:55.000Z",
      UserId: 1
    }
  ];
  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  // const hbsObject = [];
  app.get("/members", isAuthenticated, (req, res) => {
    db.Post.findAll({}).then((data) => {
      console.log("data :" + data);
      res.render("dashboard", {
        post: data
      });
    });
  });
};
