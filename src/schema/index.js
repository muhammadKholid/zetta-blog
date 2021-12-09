const { buildSchema } = require('graphql');
  // """
  // A Post refers to available attributes for a Post
  // """

module.exports = buildSchema(`
  type Article {
    _id: ID!
    title : String!
    body: String!
    comments : [Comment]
  }

  type Comment {
    _id: ID!
    comment : String!
  }

  input ArticleType {
    title : String!
    body: String!
  }

  type RootQuery {
    articles : [Article!]
    articlesAggregator(page: Int, size: Int, sortBy: String,sortOrder: Int,filter: String): [Article!]
    article(_id: String!): Article!
    comments : [Comment!]
    comment(_id: String): Comment
  }
  type Mutation {
    createArticle(article:ArticleType): Article!,
    deleteArticle(id: String): String,
    updateArticle(id: String, body: String, title : String): String
    createComment(comment:String, id: String): Comment!,
    deleteComment(id: String): String,
    updateComment(id: String, comment: String): String
  }
  schema {
    query: RootQuery
    mutation: Mutation
  }
`);

