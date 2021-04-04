const express = require("express");
const router = express.Router();

router.route('/').get((req, res) => {
    res.end("metheod get")
}).post((req, res) => {
    res.end("method post")
})

module.exports = router