const mongoose = require("mongoose");

const PostSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    device: {
      type: String,
      required: true,
    },
  
  },

  {
    timestamps: true,
    versionKey: false,
  }
);


const Post= mongoose.model("posts", PostSchema);

module.exports= Post;
