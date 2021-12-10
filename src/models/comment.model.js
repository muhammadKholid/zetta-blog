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


