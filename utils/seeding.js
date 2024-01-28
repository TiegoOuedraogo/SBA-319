// //utils/seedDB.js
// const User = require('../models/usersModel');
// const Post = require('../models/postsModel');
// const Comment = require('../models/commentsModel');
// const seeding = require('../scripts/seedDB')
// const seedDB = async () => {
//     // Clear the database
//     await User.deleteMany({});
//     await Post.deleteMany({});
//     await Comment.deleteMany({});

//     // Seed Users
//     for (const user of users) {
//         const newUser = new User(user);
//         await newUser.save();
//     }

//     // Seed Posts
//     for (const post of posts) {
//         const newPost = new Post(post);
//         await newPost.save();
//     }

//     // Seed Comments
//     for (const comment of comments) {
//         const newComment = new Comment(comment);
//         await newComment.save();
//     }
// };

// module.exports = seedDB;
