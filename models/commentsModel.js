const commentSchema = new mongoose.Schema({
    author: mongoose.Schema.Types.ObjectId, 
    post: mongoose.Schema.Types.ObjectId, 
    content: String,
   
  });
  