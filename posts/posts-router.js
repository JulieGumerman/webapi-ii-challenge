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
        PostData.findById(id)
            .then(data => {
                if(!data.id) {
                    res.status(404).json({error: "The post with the specified ID does not exist"})
                } else {
                res.send(data)
                }
            })
            .catch(err => res.status(500).json({error: "The post information could not be retrieved."}))

})

router.post("/", (req, res) => {
    const addPost = req.body;
    if (!addPost.title || !addPost.contents) {
        res.status(400).json({ errorMessage: "Please provide title and contents for the post."})
    } else {
        PostData.insert(addPost)
            .then(post => res.status(201).json(post))
            .catch(err => res.status(500).json({ error: "There was an error while saving the post to the database."}))
    }
})

router.put("/:id", (req, res) => {
    const id = req.params.id;
    const changes = req.body;

        PostData.update(id, changes)
            .then(post => {
                if (post) {
                    res.status(200).json(changes)
                } else {
                    res.status(404).json({message: "The post with the specified ID does not exist"})
                }
                
            })
            .catch(err => res.status(500).json({ error: "The post information could not be modified."}))

})

router.delete("/:id", (req, res) => {
    const id = req.params.id;

        PostData.remove(id)
        .then(post => {
            if (post) {res.json(post)} else {res.status(404).json({error: "The post with the specified ID does not exist."})}
        
        })
        .catch(err => {res.status(500).json({error: "The post could not be removed"})})

})

router.get("/:id/comments", (req, res) => {
    const id = req.params.id;
    PostData.findPostComments(id)
        .then(results => {
            if (results.length === 0) {
                res.status(404).json({message: "The post with the specified ID does not exist"});
            } else {
                res.json(results);                
            }
        })
        .catch(err => {res.status(500).json({error: "The comments could not be retrieved."})})
})

router.post("/:id/comments", (req, res) => {
    const text = req.body;
    const id = req.params.id;
    if (id) {
        PostData.insertComment(text)
            .then(comment => res.json(comment))
            .catch(err => console.log(err))

    } else {
        res.status(404).json({error: "Post with that ID not found"})
    }

})

router.get("/:id/comments/:id", (req, res) => {
    const id = req.params.id;
        PostData.findCommentById(id)
            .then(comment => {
                if(comment) {res.json(comment);
                } else {
                    res.json({error: "The post with this id does not exist."})
                }
            
            })
            .catch(err => console.log(err))

})


module.exports = router;