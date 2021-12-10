# zetta-blog

## how to use
* clone this repo
* ```yarn install``` or  ```npm install```
* ```yarn dev``` or ```npm run dev```
* open http://localhost:8080/graphql


## Query Articles and comment 

```
# Create Article
mutation {
  createArticle(article : {title :"testing application again", body :"try test app with mocha"}){
    _id
    title
    body
    comments {
      comment
    }
  }
}

# get all list Article
query {
  articles {
    _id
    title
    body
    comments{
      comment
    }
  }
}

# get list articles with sort by title, filter by title, and pagination
# page is what page number
# size is how many datas in every page
# sortBy is you wanna sort it by key in collection
# sortOrder is Int, 1 or 0, is descending or ascending
# filter is filter by title for simple filter
query {
  articlesAggregator(page:1, size:6, sortBy:"title", sortOrder:1, filter:"bla bla") {
    _id
    body
    title
   comments {
      comment
   }
  }
 }

# get article by specific ID
query {
  article(_id:"61b23542df6f6d5db32120d2"){
    _id
    title
    body
    comments {
    	comment
    }
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
  comment(_id:"61b2374916f2aa174acca0c9"){
    _id
    comment
  }
}

# Create comment
mutation {
  createComment(comment: "halah kurang lengkap gan, up", id:"61b228faa0964defdf2dbe66"){
    _id
    comment
  } 
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
