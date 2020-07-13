const express = require("express");
const routes = require("./routes");
const logger = require('morgan');
const fs = require('fs');
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

const PORT = process.env.PORT || 3001;

// Define middleware here
const app = express();
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
// app.use(routes);

app.post("/createfile", function (req, res) {
  const OUTPUT_DIR = path.resolve(__dirname, "output");
  const outputPath = path.join(OUTPUT_DIR, "README.md");
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR)
  }
  fs.writeFile(outputPath, generateMarkdown(req.body), function (err) {

    if (err) {
      return console.log(err);
    }

  })
})

// Start the API server
app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
