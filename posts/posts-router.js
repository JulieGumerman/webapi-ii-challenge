const express = require("express");
const router = express.Router();
const PostData = require("../data/db.js");

router.get("/", (req, res) => {
    PostData
    .find()
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(500).json({error: "The post's information could not be retrieved."})
    })
})

router.get("/:id", (req, res) => {
    const id = req.params.id;
    const getPost = req.body;
    if (id) {
        PostData.findById(id)
            .then(data => res.send(data))
            .catch(err => res.status(500).json({error: "The post information could not be retrieved."}))

    } else {
        res.status(404).json({error: "The post with the specified ID does not exist"})
    }
    
})

module.exports = router;