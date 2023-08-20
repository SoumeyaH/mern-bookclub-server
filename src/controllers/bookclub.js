const { BookClub } = require("../models")

const createBookClub = async (req, res) => {

    try {

    let document = {}

    for (const [key, value] of Object.entries(req.body)) {

      if (value !== null) document[key] = value 
    }
   
    await BookClub.create(document)
    res.status(200).json({ success: "Successfully created book club" })

  } catch (err) {
      console.log("ERROR MESSAGE:", err.message)
      console.log(err)
      res.status(400).json({ message: err.message });   
    } 
}


module.exports = {
  createBookClub
} 