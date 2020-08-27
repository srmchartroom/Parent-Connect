// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id,
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    db.User.create({
      first: req.body.first,
      last: req.body.last,
      email: req.body.email,
      password: req.body.password,
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch((err) => {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        first: req.user.first,
        last: req.user.last,
        email: req.user.email,
        id: req.user.id,
      });
    }
  });

  app.post("/api/posts", (req, res) => {
    db.Post.create({
      UserId: req.body.user_id,
      title: req.body.title,
      body: req.body.body,
      link: req.body.link,
      category: req.body.category,
      district: req.body.district,
      school: req.body.school,
      grade: req.body.grade,
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  app.get("/api/posts-all", (req, res) => {
    db.Post.findAll({}).then((postsDB) => {
      res.json({ postsDB });
    });
  });

  const { Op } = require("sequelize");
  app.get("/api/posts/:string", (req, res) => {
    var string = req.params.string;
    db.Post.findAll({
      where: {
        [Op.or]: [
          {
            title: {
              [Op.substring]: string,
            },
          },
          {
            body: {
              [Op.substring]: string,
            },
          },
        ],
      },
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  app.get("/api/posts-user/:user", (req, res) => {
    var user_id = parseInt(req.body.user_id);
    db.Post.findAll({
      where: {
        UserId: req.params.user,
      },
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  app.get("/api/posts-district/:district", (req, res) => {
    db.Post.findAll({
      where: {
        district: req.params.district,
      },
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  app.get("/api/posts-school/:school", (req, res) => {
    db.Post.findAll({
      where: {
        school: req.params.school,
      },
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  app.get("/api/posts-grade/:grade", (req, res) => {
    db.Post.findAll({
      where: {
        grade: req.params.grade,
      },
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  app.get("/api/posts-category/:category", (req, res) => {
    db.Post.findAll({
      where: {
        category: req.params.category,
      },
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });
};
