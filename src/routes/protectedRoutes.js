const { Router } = require("express");

const { 
    findUser, 
    deleteUser, 
    createBookClub, 
    getSingleUsersBookClubs, 
    deleteBookClub,
    createBookList } = require("../controllers");

const router = Router();

router.get("/api/find-user/:username", findUser)
router.get("/api/find-user-book-clubs/:id", getSingleUsersBookClubs)

router.post("/api/create-book-club", createBookClub)
router.post("/api/create-book-list", createBookList)

router.delete("/api/user/:id", deleteUser)
router.delete("/api/delete-book-club/:id", deleteBookClub)

module.exports = router; 