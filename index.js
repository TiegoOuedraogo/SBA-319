const express = require('express');
const connectDB = require('./confid/db');
const postRoutes = require('./routes/PostRoutes');
const userRoutes = require('./routes/UserRoutes');
const commentRoutes = require('./routes/CommentRoutes');
const seedRoutes =require('./routes/seedRoutes');


require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;
// Connect to the database
// connectDB();  

// Connect to the database
connectDB().then(() => {
    console.log('Connected to the database successfully.');

    // Start the server
}).catch(error => {
    console.error('Database connection failed:', error);
    process.exit(1);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the routes
app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);
app.use('/api/comments', commentRoutes);

app.use("/api", seedRoutes)
    

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
