const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const twit = require("twit");
const passport = require("passport");
const Strategy = require("passport-twitter").Strategy;
const axios = require("axios");
const firebase = require("firebase");
var cors = require("cors");
app.use(cors());

var firebaseConfig = {
  apiKey: "AIzaSyBlBqt_SDlYJLlCanwf1QYR7_5QQHwEL5I",
  authDomain: "pro-organiser1.firebaseapp.com",
  databaseURL: "https://pro-organiser1.firebaseio.com",
  projectId: "pro-organiser1",
  storageBucket: "pro-organiser1.appspot.com",
  messagingSenderId: "538117235337",
  appId: "1:538117235337:web:5e97d8be91e2130ee41c58",
};
firebase.initializeApp(firebaseConfig);

var T;
//app.use(express.static(path.join(__dirname, "public")));

passport.use(
  new Strategy(
    {
      //consumerKey: process.env["TWITTER_CONSUMER_KEY"],
      consumerKey: "UUzFXvVsNE5wX8ZN1LUQGx0wi",
      //consumerSecret: process.env["TWITTER_CONSUMER_SECRET"],
      consumerSecret: "CuW0hIM02NaLaMkuDgVBcy60XAsuh4gudlj7j54rSzt0lQNnyU",
      callbackURL: "/oauth/callback",
      //proxy: trustProxy,
    },
    function (token, tokenSecret, profile, cb) {
      axios
        .post(`https://pro-organiser1.firebaseio.com/auth.json`, {
          token: token,
          tokensecret: tokenSecret,
          profile: profile,
        })
        .then(() => {
          // axios.post(`https://pro-organiser1.firebaseio.com/tokse.json`, {
          //   tokenSecret,
          // });
          //axios.post(`https://pro-organiser1.firebaseio.com/idd.json`, { profile });
          T = new twit({
            consumer_key: "UUzFXvVsNE5wX8ZN1LUQGx0wi",
            consumer_secret:
              "CuW0hIM02NaLaMkuDgVBcy60XAsuh4gudlj7j54rSzt0lQNnyU",
            access_token: token,
            access_token_secret: tokenSecret,
          });
          return cb(null, profile);
        });
    }
  )
);

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.post("/comment/", function (req, res) {
  console.log(req.body.comment);
  T.post(
    "statuses/update",
    {
      status: req.body.comment,
    },
    function (err, data, response) {
      res.json(data);
    }
  );
});

// Configure view engine to render EJS templates.
// app.set("views", __dirname + "/views");
// app.set("view engine", "ejs");

// Use application-level middleware for common functionality, including
// logging, parsing, and session handling.
app.use(require("morgan")("combined"));
app.use(require("body-parser").urlencoded({ extended: true }));
app.use(
  require("express-session")({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Define routes.
// app.get("/", function (req, res) {
//   res.render("home", { user: req.user });
// });

// app.get("/login", function (req, res) {
//   console.log("ENV");
//   //console.log(process.env);
//   console.log("Headers:");
//   console.log(req.headers);
//   res.render("login");
// });

app.get("/login", passport.authenticate("twitter"));

app.get(
  "/oauth/callback",
  passport.authenticate("twitter", {
    failureRedirect: "http://localhost:3000/",
  }),
  function (req, res) {
    res.redirect("http://localhost:3000/");
  }
);

// app.get("/profile", require("connect-ensure-login").ensureLoggedIn(), function (
//   req,
//   res
// ) {
//   res.render("profile", { user: req.user });
// });

app.get("/logout", function (req, res) {
  req.session.destroy(function (err) {
    firebase
      .database()
      .ref("auth/")
      .remove()
      .then(() => {
        res.redirect("http://localhost:3000/");
      });
  });
});

app.listen(5000);
