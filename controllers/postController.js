const Post = require('../models/postsModel');

exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find({}).populate('author');
        res.json(posts);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.createPost = async (req, res) => {
    try {
        const newPost = new Post(req.body);
        await newPost.save();
        res.status(201).send(newPost);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports .getPostsByUserId = async(req,res)=>{
    try{
       //user id
       const userId = req.params.userId;
       const userPosst = await Post.find({author: userId}).populate('author');
       if(!userPosst || userPosst.length ===0){
        return res.status(404).send({message:`No post found with giving user id`})
       }
       res.json(userPosst);

    }catch(error){
        res.status(500).send(error)
    }
}
exports.updatePost = async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedPost) {
            return res.status(404).send({ message: 'Post not found' });
        }
        res.send(updatedPost);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.deletePost = async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        if (!deletedPost) {
            return res.status(404).send({ message: 'Post not found' });
        }
        res.send({ message: 'Post deleted successfully', deletedPost });
    } catch (error) {
        res.status(500).send(error);
    }
};

