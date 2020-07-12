const router = require("express").Router();

// All routes prefixed with "/api"
router
    .route("/createfile")
    .post((req, res) => res.json("you did it"))

module.exports = router;