const { BookList } = require("../models")

const createBookList = async (req, res) => {

    console.log(req.body)

    try {
      
      let document = {}
      
      for (const [key, value] of Object.entries(req.body)) {
        
        if (value !== null) document[key] = value 
      }
      
      await BookList.create(document)
      res.status(200).json({ success: "Successfully created book list" })
      
    } catch (err) {
      console.log("ERROR MESSAGE:", err.message)
      console.log(err)
      res.status(400).json({ message: err.message });   
    } 
  
  }


  module.exports = {
    createBookList
  }