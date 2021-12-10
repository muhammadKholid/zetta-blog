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

