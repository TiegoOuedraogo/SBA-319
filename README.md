### MongoDB Database Application
Introduction
This project is a MongoDB Database Application built with Node.js, Express, and MongoDB. It's designed to showcase the ability to work with MongoDB, performing various CRUD operations, indexing for query efficiency, and implementing validation rules for data consistency. The application is structured around three main data collections: users, posts, and comments, offering a comprehensive demonstration of handling relationships and data integrity in a MongoDB environment.

### Objectives
Server Application: Create a server application using Node, Express, and MongoDB.
CRUD API: Develop a CRUD (Create, Read, Update, Delete) API using Express and MongoDB.
MongoDB Indexing: Implement indexing on frequently queried fields to optimize query performance.
Data Validation: Ensure data consistency by creating and enforcing MongoDB validation rules.
Data Modeling: Utilize reasonable data modeling practices to structure the database effectively.
Getting Started
Prerequisites
Node.js
npm (Node Package Manager)
MongoDB
Installation
Clone the repository: 
https://github.com/TiegoOuedraogo/SBA-319.git 
Navigate to the project directory:
npm install
Set up environment variables:
MONGODB_URI=your_mongodb_connection_string
PORT=8080
Start the server:
npm run dev
API Endpoints
The application provides the following API endpoints:

Users
GET /api/users: Fetch all users.
POST /api/users: Create a new user.
PATCH /api/users/:id: Update a user by ID.
DELETE /api/users/:id: Delete a user by ID.
Posts
GET /api/posts: Fetch all posts.
POST /api/posts: Create a new post.
PATCH /api/posts/:id: Update a post by ID.
DELETE /api/posts/:id: Delete a post by ID.
Comments
GET /api/comments: Fetch all comments.
POST /api/comments: Create a new comment.
PATCH /api/comments/:id: Update a comment by ID.
DELETE /api/comments/:id: Delete a comment by ID.
Development Practices
Data Indexing: Implemented sensible indexing for frequently queried fields to enhance query performance.
Data Validation: Applied validation rules to ensure data consistency and integrity.
Code Organization: Utilized reasonable code organization practices, ensuring maintainability and scalability.
Error Handling: Ensured the application runs without errors, providing clear error messages and handling exceptions gracefully.
Git Practices: Committed changes frequently, maintaining a clear history of the project's development.
Contributing
Contributions are welcome. Please read the contribution guidelines before submitting pull requests.

Authors
Your Name - Initial work
License
This project is licensed under the MIT License - see the LICENSE.md file for details.

Acknowledgments
Hat tip to anyone whose code was used.
Inspiration.
The community for constant support.

