// const Comment = require('../models/commentsModel');

// const getCommentsById = async () => {
//     return await Comment.find({}).populate('author').populate('post');
// };
// const getAllComments = async () => {
//     return await Comment.find({}).populate('author').populate('post');
// };

// const createComment = async (commentData) => {
//     console.log(commentData)
//     const comment = new Comment(commentData);
//     await comment.save();
//     console.log(comment);
//     return comment;
// };

// const updateComment = async (commentId, updateData) => {
//     return await Comment.findByIdAndUpdate(commentId, updateData, { new: true });
// };

// const deleteComment = async (commentId) => {
//     return await Comment.findByIdAndDelete(commentId);
// };

// module.exports = {
//     getCommentsById,
//     getAllComments,
//     createComment,
//     updateComment,
//     deleteComment
// };
