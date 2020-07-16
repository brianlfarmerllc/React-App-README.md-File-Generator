const path = require("path");
const fs = require('fs');
const generateMarkdown = require("../utils/generateMarkdown");
const router = require("express").Router();
// const apiRoutes = require("./api")

router
  .route("/createfile")
  .post((req, res) => {
    const OUTPUT_DIR = path.resolve(__dirname, "../output");
    const outputPath = path.join(OUTPUT_DIR, "README.md");

    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR)
    }

    fs.writeFile(outputPath, generateMarkdown(req.body), err => {
      if (err) {
        return console.log(err);
      }
    });

    return res.json({});
  })

router
  .route("/download")
  .get((req, res) => {
    res.download("./output/README.md", "README.md", err => {
      if (err) {
        return console.log(err);
      }
    })
  })

router
  .route("./serviceWorker.js")
  .get((req, res) => {
    res.sendFile(path.resolve(__dirname,  "../client/build/serviceworker.js"));
  })

// If no API routes are hit, send the React app
router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;