const {find, findAggregate, findById, findByIdAndDelete, findByIdAndUpdate, create} = require("../models/article.model")
const {findComment, findByIdComment, findByIdAndDeleteComment, findByIdAndUpdateComment, createComment} = require("../models/comment.model")
// const { db } = require('../config/database.config');
// const dbase = db();
// const Article = dbase.collection('articles')
// const { ObjectId } = require('mongodb');

module.exports = {
  articles: async args => {
    try {
      // const {sortBy, sortOrder, filter, pagination} = args;
      // const articleFetched = await Article.aggregate()
      const articleFetched = await find()
      return articleFetched;
    } catch (error) {
    console.log(error);
      throw error
    }
  },
  comments: async () => {
    try {
      const commentFetched = await findComment()
      return commentFetched;
    } catch (error) {
      throw error
    }
  },

  article: async (id) => {
    try {
      const articleFetched = await findById(id);
      return articleFetched;
    } catch (error) {
      throw error
    }
  },
  comment: async (id) => {
    try {
      const commentFetched = await findByIdComment(id);
      return commentFetched;
    } catch (error) {
      throw error
    }
  },

  createArticle: async args => {
    try {
      console.log(args.article);
      const art = await create(args.article);
      // console.log(art);
      return 'succesfully create new articles';
    } catch (error) {
      throw error
    }
  },
  createComment: async args => {
    try {
      const article = await createComment(args);
      // console.log(art);
      return 'succesfully create new comments';
    } catch (error) {
      throw error
    }
  },

  updateArticle: async args => {
    try {
      console.log('masuk update', args);
      const { id, body, title } = args
      const updatedArtcile = await findByIdAndUpdate(id, { body, title });
      return `Article ${id} updated Successfully!!!`
    } catch (error) {
      throw error
    }
  },
  updateComment: async args => {
    try {
      console.log('masuk update', args);
      const { id, comment } = args
      const updatedComment = await findByIdAndUpdateComment(id, {comment});
      return `Comment ${id} updated Successfully!!!`
    } catch (error) {
      throw error
    }
  },

  deleteArticle: async args => {
    try {
      await findByIdAndDelete(args.id);
      // return {
      //   ...deletedArticle._doc,
      //   _id: deletedArticle.id,
      //   createdAt: new Date(deletedArticle._doc.createdAt).toISOString(),
      // }
      console.log('delete', args.id);
      return `succesfully delete article with id ${args.id}`
    } catch (error) {
      throw error
    }
  },
  deleteComment: async args => {
    try {
      await findByIdAndDeleteComment(args.id);
      // return {
      //   ...deletedArticle._doc,
      //   _id: deletedArticle.id,
      //   createdAt: new Date(deletedArticle._doc.createdAt).toISOString(),
      // }
      console.log('delete', args.id);
      return `succesfully delete comment with id ${args.id}`
    } catch (error) {
      throw error
    }
  },
} 

