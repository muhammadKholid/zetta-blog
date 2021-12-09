const { db } = require('../config/database.config');
const dbase = db();
const Article = dbase.collection('articles')
const { ObjectId } = require('mongodb');

const find = () => {
  return Article.find().toArray();
}

const findById = (id) => {
  return Article.findOne({_id : ObjectId(id)})
  // return Post.findOne({_id : id})
}

const create = (data) => {
  return Article.insertOne(data);
}

const findByIdAndUpdate = (id, updatedData) => {
    return Article.updateOne(
      { _id: ObjectId(id) },
      {
        $set: updatedData,
      }
    );
}

const findByIdAndDelete = id => {
    return Article.deleteOne({ _id: ObjectId(id) });
}

module.exports = {
  find, findById, create, findByIdAndDelete, findByIdAndUpdate 
};

