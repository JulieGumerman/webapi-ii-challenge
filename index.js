const express = require("express");
const cors = require("cors");

const server = express();
const postRouter = require("./posts/posts-router.js");

server.use(express.json());
server.use(cors());
server.use("/api/posts", postRouter);

server.get("/", (req, res) => {
    res.send("<h3>It's scary, but you've got this.</h3>");
});

server.listen(1500, () => {
    console.log("******it's alive*******");
})