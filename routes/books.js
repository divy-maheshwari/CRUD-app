const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Book = require('../models/books');




router.get('/:id',(req,res,next) => {
    Book.findById(req.params.id,(err,product) => {
        if(err) {return next(err);}
        res.json(product);
    });
});

router.get('/',(req,res,next) => {
    Book.find((err,products) => {
       if(err) { return next(err);}
       res.json(products);
    });
});

router.post('/',(req,res) => {
    const {title,author,description,published_year,publisher} = req.body;
    const book = new Book({
        title,
        author,
        description,
        published_year,
        publisher
    });
    book.save()
       .then(item => {
           res.json(item);
       });
});


router.put('/:id',(req,res,next) => {
    Book.findByIdAndUpdate(req.params.id,req.body,(err,updatedProduct) => {
        if(err){return next(err);}
        updatedProduct.save()
              .then(item => {
                  res.json(item);
              });
    });
});


router.delete('/:id',(req,res,next) => {
    Book.findByIdAndDelete(req.params.id,req.body,(err,deletedItem) => {
        if(err){return next(err);}
        res.json(deletedItem);
    });
});

module.exports = router;