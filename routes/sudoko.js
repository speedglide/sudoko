const express = require('express');
const router = express.Router();
const path = require('path');

router.get ('/',function (req, res) {
  res.sendFile (path.join(__dirname, '../index.html'));
});

router.get ('/index.html',function (req, res) {
  res.sendFile (path.join(__dirname, '../index.html'));
});

router.get ('/sudoko', (req,res)=>{
  res.status(200).json({
    "success" : true,
    "rows" :  [[5,0,3,3,6,7,8,9,1],
              [1,9,7,4,3,0,6,2,5],
              [8,2,6,9,1,5,4,7,0],
              [7,0,4,8,5,3,9,6,2],
              [3,8,2,6,0,1,5,4,7],
              [6,5,9,7,4,3,1,2,8],
              [4,0,1,5,2,9,7,8,6],
              [2,6,8,1,7,0,3,5,9],
              [9,7,0,3,8,6,2,1,4]]

    // "answers" :  [[5,4,3,3,6,7,8,9,1],
    //           [1,9,7,4,3,8,6,2,5],
    //           [8,2,6,9,1,5,4,7,3],
    //           [7,1,4,8,5,3,9,6,2],
    //           [3,8,2,6,9,1,5,4,7],
    //           [6,5,9,7,4,3,1,2,8],
    //           [4,3,1,5,2,9,7,8,6],
    //           [2,6,8,1,7,4,3,5,9],
    //           [9,7,5,3,8,6,2,1,4]]
  });
});

module.exports = router;


