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
    article_id: ID!
  }

  input ArticleType {
    title : String!
    body: String!
  }

  type RootQuery {
    article(id: String!): Article!
    comments : [Comment!]
    comment(id: String): Comment
  }
  type Mutation {
    articles(sortBy: String,sortOrder: Int,filter: String,pagination: Int): [Article!]
    createArticle(article:ArticleType): String,
    deleteArticle(id: String): String,
    updateArticle(id: String, body: String, title : String): String
    createComment(comment:String, article_id: String): String,
    deleteComment(id: String): String,
    updateComment(id: String, comment: String): String
  }
  schema {
    query: RootQuery
    mutation: Mutation
  }
`);

