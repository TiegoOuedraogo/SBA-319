// const express = require('express');
// const router = express.Router();
// // const mongoose = require('mongoose');
// // const User = require('../models/usersModel');
// // const Post = require('../models/postsModel');
// // const Comment = require('../models/commentsModel');
// //const connectDB = require('../confid/db');

// // Sample data arrays
// const sbaCollections= ['users','posts','comments'];
// const data = [
//     [ 
//     { username: 'user1', email: 'user1@example.com', password: 'password123' },
//     { username: 'user2', email: 'user2@example.com', password: 'password234' },
//     { username: 'user3', email: 'user3@example.com', password: 'password3456' },
//     { username: 'user4', email: 'user4@example.com', password: 'password456' },
//     { username: 'user5', email: 'user5@example.com', password: 'password557' },
//     { username: 'user6', email: 'user6@example.com', password: 'password678' },
//     { username: 'user7', email: 'user7@example.com', password: 'password789' },
//     { username: 'user8', email: 'user8@example.com', password: 'password890' },
//     { username: 'user9', email: 'user9@example.com', password: 'password901' },
//     { username: 'user10', email: 'user10@example.com', password: 'password902' },
//     { username: 'user11', email: 'user11@example.com', password: 'password903' },
//     { username: 'user12', email: 'user12@example.com', password: 'password904' },
//     { username: 'user13', email: 'user13@example.com', password: 'password905' },
//     { username: 'user14', email: 'user14@example.com', password: 'password906' },
//     { username: 'user15', email: 'user15@example.com', password: 'password907' },
//     { username: 'user16', email: 'user16@example.com', password: 'password908' },
//     { username: 'user17', email: 'user17@example.com', password: 'password909' },
//     { username: 'user18', email: 'user18@example.com', password: 'password911' },
//     { username: 'user19', email: 'user19@example.com', password: 'password912' },
//     { username: 'user20', email: 'user20@example.com', password: 'password913' }
// ],

//  [
//     { title: 'Post 1', content: 'Content of post 1', author: 'user_id_1' },
//     { title: 'Post 2', content: 'Content of post 2', author: 'user_id_2' },
//     { title: 'Post 3', content: 'Content of post 3', author: 'user_id_3' },
//     { title: 'Post 4', content: 'Content of post 4', author: 'user_id_4' },
//     { title: 'Post 5', content: 'Content of post 5', author: 'user_id_5' },
//     { title: 'Post 6', content: 'Content of post 6', author: 'user_id_6' },
//     { title: 'Post 7', content: 'Content of post 7', author: 'user_id_7' },
//     { title: 'Post 8', content: 'Content of post 8', author: 'user_id_8' },
//     { title: 'Post 9', content: 'Content of post 9', author: 'user_id_9' },
//     { title: 'Post 10', content: 'Content of post 10', author: 'user_id_10' },
//     { title: 'Post 11', content: 'Content of post 11', author: 'user_id_11' },
//     { title: 'Post 12', content: 'Content of post 12', author: 'user_id_12' },
//     { title: 'Post 13', content: 'Content of post 13', author: 'user_id_13' },
//     { title: 'Post 14', content: 'Content of post 14', author: 'user_id_14' },
//     { title: 'Post 15', content: 'Content of post 15', author: 'user_id_15' },
//     { title: 'Post 16', content: 'Content of post 16', author: 'user_id_16' },
//     { title: 'Post 17', content: 'Content of post 17', author: 'user_id_17' },
//     { title: 'Post 18', content: 'Content of post 18', author: 'user_id_18' },
//     { title: 'Post 19', content: 'Content of post 19', author: 'user_id_19' },
//     { title: 'Post 20', content: 'Content of post 20', author: 'user_id_20' }
// ],

//  [
//     { content: 'Comment 1 on Post 1', author: 'user_id_1', post: 'post_id_1' },
//     { content: 'Comment 2 on Post 2', author: 'user_id_2', post: 'post_id_2' },
//     { content: 'Comment 3 on Post 3', author: 'user_id_3', post: 'post_id_3' },
//     { content: 'Comment 4 on Post 4', author: 'user_id_4', post: 'post_id_4' },
//     { content: 'Comment 5 on Post 5', author: 'user_id_5', post: 'post_id_5' },
//     { content: 'Comment 6 on Post 6', author: 'user_id_6', post: 'post_id_6' },
//     { content: 'Comment 7 on Post 7', author: 'user_id_7', post: 'post_id_7' },
//     { content: 'Comment 8 on Post 8', author: 'user_id_8', post: 'post_id_8' },
//     { content: 'Comment 9 on Post 9', author: 'user_id_9', post: 'post_id_9' },
//     { content: 'Comment 10 on Post 10', author: 'user_id_10', post: 'post_id_10' },
//     { content: 'Comment 11 on Post 11', author: 'user_id_11', post: 'post_id_11' },
//     { content: 'Comment 12 on Post 12', author: 'user_id_12', post: 'post_id_12' },
//     { content: 'Comment 13 on Post 13', author: 'user_id_13', post: 'post_id_13' },
//     { content: 'Comment 14 on Post 14', author: 'user_id_14', post: 'post_id_14' },
//     { content: 'Comment 15 on Post 15', author: 'user_id_15', post: 'post_id_15' },
//     { content: 'Comment 16 on Post 16', author: 'user_id_16', post: 'post_id_16' },
//     { content: 'Comment 17 on Post 17', author: 'user_id_17', post: 'post_id_17' },
//     { content: 'Comment 18 on Post 18', author: 'user_id_18', post: 'post_id_18' },
//     { content: 'Comment 19 on Post 19', author: 'user_id_19', post: 'post_id_19' },
//     { content: 'Comment 20 on Post 20', author: 'user_id_20', post: 'post_id_20' }

// ]];
// router.get('/', async(req,res)=>{
//     try {
//         for (const [index, SBA] of sbaCollections) {
//             const collection = db.collection(SBA);
            
//             await collection.deleteMany({});
//             await collection.insertMany(data[index]);
//         }
    
//         res.status(200).send("Data Inserted");
//     } catch (err) {
//         res.status(500).send("Something went wrong.");
//     }
// });


// // const seedDB = async () => {
// //     await connectDB();

// //     //clear the collections before seeding
// //     await User.deleteMany({});
// //     await Post.deleteMany({});
// //     await Comment.deleteMany({});

// //     // Seed Users
// //     for (const user of users) {
// //         const newUser = new User(user);
// //         await newUser.save();
// //     }

// //     for (const post of posts) {
// //         const newPost = new Post(post);
// //         await newPost.save();
// //     }

// //     for (const comment of comments) {
// //         const newComment = new Comment(comment);
// //         await newComment.save();
// //     }

// //     console.log('Database seeded successfully!');
// //     mongoose.connection.close();
// // };

// // seedDB().catch(err => {
// //     console.error('Error seeding the database:', err);
// //     mongoose.connection.close();
// // });

