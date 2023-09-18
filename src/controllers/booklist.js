const { BookList } = require("../models")

const createBookList = async (req, res) => {

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

  const getSingleUsersBookLists = async (req, res) => {

    const { id } = req.params;
  
    try {
      const data = await BookList.find({ userId: id });
  
      if (data.length === 0) return res.status(200).json({ unsuccessful: "No match" });
  
      if (data) return res.status(200).json({success: data});
  
    } catch (err) {
      console.log("ERROR MESSAGE:", err.message)
      console.log(err)
      res.status(400).json({ message: err.message });
    }
  
  }

  const deleteBookList = async (req, res) => {
    const { id } = req.params
  
    try {
      await BookList.findByIdAndDelete(id);  
      res.status(200).json({ success: "Successfully deleted book list" });
  
    } catch (err) {
      console.log("ERROR MESSAGE:", err.message)
      console.log(err)
      res.status(400).json({ message: err.message });
    }
  };
  


  module.exports = {
    createBookList,
    getSingleUsersBookLists,
    deleteBookList,
  }