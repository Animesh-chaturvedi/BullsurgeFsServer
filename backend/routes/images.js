const router = require("express").Router();
const Photo = require("../models/images");


router.post("/add", async (req, res) => {
    try {
        const img = await Photo(req.body).save();
        res.status(201).send({data:img, message:"image created successfully"})
    } catch (error) {
        console.log(error)
        res.status(500).send({message:"Internal server error"})
    }
})


//get all images

router.get("/:images", async (req, res) => {
    try {
        console.log(req.params)
        const images = await Photo.find().limit(10).skip(req.params.images);
        res.status(200).send({data:images})
    } catch (error) {
        res.status(500).send({message:"Internal server error"})
    }
})


module.exports = router;