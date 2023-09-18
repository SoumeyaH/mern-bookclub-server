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

const getSingleUsersBookClubs = async (req, res) => {

  const { id } = req.params;

  try {
    const data = await BookClub.find({ members: id });

    // todo change from error to unsucceful or something
    if (data.length === 0) return res.status(200).json({ error: "No match" });
    
    // todo limit data to 5 
    if (data) return res.status(200).json({success: data});

  } catch (err) {
    console.log("ERROR MESSAGE:", err.message)
    console.log(err)
    res.status(400).json({ message: err.message });
  }

}

const deleteBookClub = async (req, res) => {
  const { id } = req.params

  try {
    await BookClub.findByIdAndDelete(id);  
    res.status(200).json({ success: "Successfully deleted book club" });

  } catch (err) {
    console.log("ERROR MESSAGE:", err.message)
    console.log(err)
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  createBookClub,
  getSingleUsersBookClubs,
  deleteBookClub
} 