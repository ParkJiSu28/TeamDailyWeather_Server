var Board = require('../models/board');
var express = require('express');
var router = express.Router();
var util     = require('../util');
//전체보기.
router.get('/',util.isLoggedin,function(req,res,next){
  Board.find({})
  .sort({created_at:-1})
  .exec(function(err,boards){
    res.json(err||!boards? util.successFalse(err):util.successTrue(boards));
  });
});


//게시물 작성하기

router.post('/',util.isLoggedin,function(req,res,next){
  var newBoard = new Board(req.body);
  newBoard.save(function(err,board){
    res.json(err||!board? util.successFalse(err):util.successTrue(board));
  });
});
module.exports = router;
