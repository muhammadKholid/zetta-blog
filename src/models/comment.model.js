// const { db } = require('../config/database.config');
// const dbase = db();
// const Comment = dbase.collection('comments')
// const { ObjectId } = require('mongodb');

// const findComment = () => {
//   return Comment.find().toArray();
// }

// const findByIdComment = (id) => {
//   return Comment.findOne({_id : ObjectId(id)})
//   // return Post.findOne({_id : id})
// }

// const createComment = (data) => {
//   return Comment.insertOne(data);
// }

// const findByIdAndUpdateComment = (id, updatedData) => {
//     return Comment.updateOne(
//       { _id: ObjectId(id) },
//       {
//         $set: updatedData,
//       }
//     );
// }

// const findByIdAndDeleteComment = id => {
//     return Comment.deleteOne({ _id: ObjectId(id) });
// }

// module.exports = {
//   findComment, findByIdComment, createComment, findByIdAndDeleteComment, findByIdAndUpdateComment
// };
const mongoose = require("mongoose")

const Schema = mongoose.Schema

const commentSchema = new Schema(
  {
    comment: {
      type: String,
      required: true,
    },
    article : 
      {type : Schema.Types.ObjectId, ref : "Article"}
  },
  { timestamps: true, writeConcern: {
    w: 'majority',
    j: true,
    wtimeout: 1000
  } }
)

module.exports = mongoose.model("Comment", commentSchema)


