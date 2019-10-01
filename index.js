const express = require("express");

const server = express();

server.get("/", (req, res) => {
    res.send("<h3>It's scary, but you've got this.</h3>");
});

server.listen(1500, () => {
    console.log("******it's alive*******");
})