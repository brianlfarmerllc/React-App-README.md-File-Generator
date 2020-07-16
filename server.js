const express = require("express");
const routes = require("./routes");
const sslRedirect = require('heroku-ssl-redirect');

const PORT = process.env.PORT || 3001;

// Define middleware here
const app = express();
// enable ssl redirect
app.use(sslRedirect());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Start the API server
app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
