const mongoose =require('mongoose');

const commentSchema = new mongoose.Schema({
    author: mongoose.Schema.Types.ObjectId, 
    post: mongoose.Schema.Types.ObjectId, 
    content: String,
   
  },{timestamps:true
  });
  const Comment = mongoose.model('Post', commentSchema );
  module.exports = Comment;