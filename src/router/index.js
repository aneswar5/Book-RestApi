const express = require("express");
const router = express.Router();
const Authorbooks=require('../model');


router.get("/", async(req, res) => {
    try {
        const authorbooks=await Authorbooks.find();
        res.json(authorbooks);
    } catch (error) {
        res.send('Error '+error)
    }
});

router.get("/:id", async(req, res) => {
    try {
        const authorbooks=await Authorbooks.findById(req.params.id);
        res.json(authorbooks);
    } catch (error) {
        res.send('Error '+error)
    }
});


router.post('/',async(req,res)=>{
    const authorbooks=new Authorbooks({
        authorName:req.body.authorName,
        bookName: req.body.bookName
    })
    try {
       const data = await authorbooks.save();
       res.json(data);
            console.log(data._id);
    } catch (error) {
        res.send('Error')
    }
})

module.exports = router;
