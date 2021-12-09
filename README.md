# zetta-blog

## how to use
* clone this repo
* ```yarn install``` or ```yarn add``` or ```npm install```
* ```yarn dev``` or ```npm run dev```
* open http://localhost:8080/graphql


## Query Articles and comment 

```
# Create Article
mutation {
  createArticle(article : {title :"testing application again", body :"try test app with mocha"}) 
}

# get list Article
query {
  articles(sortBy:"title", sortOrder:0, filter:"haha", pagination: 2) {
    _id
    title
    body
    comments{
      comment
    }
  }
}

# get article by specific ID
query {
  article(id:"61b19f6fa0f66f37f5444e59"){
    _id
    title
    body
  }
}

# Update Article
mutation {
  updateArticle(id:"61b19f6fa0f66f37f5444e59", title:"update", body :"update body")
}

# Delete article
mutation {
  deleteArticle(id : "61b19f6fa0f66f37f5444e59")
}

# get list Comments
query {
  comments {
    _id
    comment
  }
}

# Get comment by specific ID
query {
  comment(id:"61b1b010b16a4000c3a514c4"){
    _id
    comment
  }
}

# Create comment
mutation {
  createComment(comment: "halah kurang lengkap gan, up", article_id:"61b1a3f83bf58e85280fb2a3") 
}

# Delete Comment
mutation {
  deleteComment(id:"61b1b049e4fd6f08d6f0c21e")
}

# Update Comment
mutation {
  updateComment(id:"61b1b010b16a4000c3a514c4", comment: "update comment")
}
```
