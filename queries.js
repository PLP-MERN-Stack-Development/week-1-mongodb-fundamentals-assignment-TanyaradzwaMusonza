// CRUD queries run in PowerShell
db.books.find({genre:"Fantasy"})
db.books.find({published_year:1925})
db.books.find({author:"J.R.R. Tolkien"})
db.books.updateOne({  title: 'The Lord of the Rings'},{$set:{price:20.00}})
db.books.deleteOne({title: 'The Hobbit'})

//Advanced queries
db.books.find({in_stock:true, published_year:{$gt:2010}})
db.books.find({},{title:1,author:1,price:1,_id:0})
db.books.find().sort({price:1})
db.books.find().sort({price:-1})
db.books.find().skip(0).limit(5)
db.books.find().skip(10).limit(5)
              
              

// Aggregation pipeline from Compass
//Create an aggregation pipeline to calculate the average price of books by genre
[
  {
    $group:
      /**
       * _id: The id of the group.
       * fieldN: The first field name.
       */
      {
        _id: "$genre",
        avergePrice: {
          $avg: "$price"
        }
      }
  }
]
  //Create an aggregation pipeline to find the author with the most books in the collection
[{
    $group:
      /**
       * _id: The id of the group.
       * fieldN: The first field name.
       */
      {
        _id: "$author",
        bookCount: {
          $sum: 1
        }
      }
  }
]
//Implement a pipeline that groups books by publication decade and counts them
db.books.aggregate([
  {
    $group: {
      _id: {
        $subtract: [
          "$published_year",
          { $mod: [ "$published_year", 10 ] }
        ]
      },
      bookCount: { $sum: 1 }
    }
  },
  { $sort: { _id: 1 } }
])



//Queries
db.books.createIndex({ title: 1 })
db.books.createIndex({ author: 1, published_year: 1 })
// Query without index
db.books.find({ title: "The Hobbit" }).explain("executionStats")

// Query with index (after creating index)
db.books.find({ title: "The Hobbit" }).explain("executionStats")

// Compound index query
db.books.find({ author: "J.R.R. Tolkien", published_year: 1937 }).explain("executionStats")



