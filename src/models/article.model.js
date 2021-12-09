// const { db } = require('../config/database.config');
// const dbase = db();
// const Article = dbase.collection('articles')
// const { ObjectId } = require('mongodb');

// const find = () => {
//   return Article.find().toArray();
// }

// const findById = (id) => {
//   return Article.findOne({_id : ObjectId(id)})
//   // return Post.findOne({_id : id})
// }

// const create = (data) => {
//   return Article.insertOne(data);
// }

// const findByIdAndUpdate = (id, updatedData) => {
//     return Article.updateOne(
//       { _id: ObjectId(id) },
//       {
//         $set: updatedData,
//       }
//     );
// }

// const findByIdAndDelete = id => {
//     return Article.deleteOne({ _id: ObjectId(id) });
// }

// module.exports = {
//   find, findById, create, findByIdAndDelete, findByIdAndUpdate 
// };
const mongoose = require("mongoose")

const Schema = mongoose.Schema

const articleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    comments : [
      {type : Schema.Types.ObjectId, ref : "Comment"}
    ]
  },
  { timestamps: true, writeConcern: {
    w: 'majority',
    j: true,
    wtimeout: 1000
  } }
)

module.exports = mongoose.model("Article", articleSchema)

