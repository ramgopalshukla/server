const posts = require("../models/post.model");

const getpost = async (req, res) => {

    const post = await posts.find();
    res.send(post);

};



const createpost = async (req, res) => {
  try {
    const payload = req.body;

    const new_post = new posts(payload);
    await new_post.save();

    res.send("post done");
  } catch (err) {
    console.log("something went wrong");
  }
};



const updatepost = async (req, res) => {
  try {
    const payload = req.body;
    const postid = req.params.postid;
    await posts.findByIdAndUpdate({ _id: postid }, payload);

    res.send("post updated succesfully");
  } catch (err) {
    console.log("something went wrong");
  }
};



const deletepost = async (req, res) => {
  try {
    const postid = req.params.postid;

    await posts.findByIdAndDelete({ _id: postid });

    res.send("post deleted succesfully");
  } catch (err) {
    console.log("something went wrong");
  }
};

module.exports={getpost, createpost, updatepost, deletepost}
