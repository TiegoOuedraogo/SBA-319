const Comment = require('../models/commentsModel');

exports.createComment = async (req, res) => {
    try {
        const newComment = new Comment(req.body);
        await newComment.save();
        res.status(201).send(newComment);
    } catch (error) {
        res.status(400).send(error);
    }
};
exports.getCommentById = async (req, res) => {
    // console.log("line 16",req.params)
    try {
        const commentId = await Comment.findById(req.params.id);
        console.log("line 16",commentId)
        res.json(commentId);
    } catch (error) {
        res.status(500).send(error);
    }
};
exports.getAllComments = async (req, res) => {
    try {
        const comments = await Comment.find({}).populate('author').populate('post');
        res.json(comments);
    } catch (error) {
        res.status(500).send(error);
    }
};


exports.updateComment = async (req, res) => {
    try {
        const updatedComment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedComment) {
            return res.status(404).send({ message: 'Comment not found' });
        }
        res.send(updatedComment);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.deleteComment = async (req, res) => {
    try {
        const deletedComment = await Comment.findByIdAndDelete(req.params.id);
        if (!deletedComment) {
            return res.status(404).send({ message: 'Comment not found' });
        }
        res.send({ message: 'Comment deleted successfully', deletedComment });
    } catch (error) {
        res.status(500).send(error);
    }
};

