const Article = require('../models/article.model');
const Comment = require('../models/comment.model');

module.exports = {
  articles: async () => {
    try {
      const articleFetched = await Article.find().populate({
      path: 'comments',
      select:
        'comment',
    }).exec()
      return articleFetched.map(art => {
        return {
          ...art._doc,
          _id: art._id,
          createdAt: new Date(art._doc.createdAt).toISOString(),
        }
      })
    } catch (error) {
    console.log(error);
      throw error
    }
  },

  articlesAggregator: async args => {
    try {
      const {page, size, sortBy, sortOrder, filter} = args;

      const articleFetched = await Article.aggregate([
        { $match: {title : {$regex : `.*${filter}.*`, $options: 'i'}}},
        { $sort : {[`${sortBy}`] : sortOrder ? -1 : 1}},
        { $skip : size * (page - 1)},
        { $limit : size },
        { $lookup: {
        from: "comments",
        localField: "comments",
        foreignField: "_id",
        as: "comments"
      }},
      ])
      return articleFetched;
    } catch (error) {
    console.log(error);
      throw error
    }
  },

  comments: async () => {
    try {
      const commentFetched = await Comment.find()
      return commentFetched;
    } catch (error) {
      throw error
    }
  },

  article: async (_id) => {
    try {
      const articleFetched = await Article.findById(_id).populate({
      path: 'comments',
      select:
        'comment',
    }).exec();
      return {
        ...articleFetched._doc,
        _id: articleFetched._id,
        createdAt: new Date(articleFetched._doc.createdAt).toISOString(),
      }
    } catch (error) {
    console.log(error)
      throw error
    }
  },
  comment: async (_id) => {
    try {
      const commentFetched = await Comment.findById(_id);
      return commentFetched;
    } catch (error) {
      throw error
    }
  },
  createArticle: async args => {
    try {
      const { body, title } = args.article
      const art =new Article({
        title,
        body,
      })
      const newArt= await art.save()
      return { ...newArt._doc, _id: newArt.id }
    } catch (error) {
    console.log(error);
      throw error
    }
  },

  createComment: async args => {
    try {
      const {comment, id} = args;
      const com =new Comment({
        comment,
        article_id: id
      })
      const newCom= await com.save()
      const findArt = await Article.findById(id);
      findArt.comments.push(newCom._id);
      await findArt.save();

      return { ...newCom._doc, _id: newCom.id }
    } catch (error) {
    console.log(error);
      throw error
    }
  },

  updateArticle: async args => {
    try {
      console.log('masuk update', args);
      const { id, body, title } = args
      const updatedArtcile = await Article.findByIdAndUpdate(id, { body, title });
      return `Article ${id} updated Successfully!!!`
    } catch (error) {
      throw error
    }
  },
  updateComment: async args => {
    try {
      console.log('masuk update', args);
      const { id, comment } = args
      const updatedComment = await Comment.findByIdAndUpdate(id, {comment});
      return `Comment ${id} updated Successfully!!!`
    } catch (error) {
      throw error
    }
  },

  deleteArticle: async args => {
    try {
      await Article.findByIdAndDelete(args.id);
      console.log('delete', args.id);
      return `succesfully delete article with id ${args.id}`
    } catch (error) {
      throw error
    }
  },
  deleteComment: async args => {
    try {
      await Comment.findByIdAndDelete(args.id);
      console.log('delete', args.id);
      return `succesfully delete comment with id ${args.id}`
    } catch (error) {
      throw error
    }
  },
} 

