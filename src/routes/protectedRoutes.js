const { Router } = require("express");

const { 
    findUser, 
    deleteUser, 
    createBookClub, 
    getSingleUsersBookClubs, 
    deleteBookClub,
    createBookList,
    getSingleUsersBookLists,
    deleteBookList } = require("../controllers");

const router = Router();

router.get("/api/find-user/:username", findUser)
router.get("/api/find-user-book-clubs/:id", getSingleUsersBookClubs)
router.get("/api/find-user-book-lists/:id", getSingleUsersBookLists)

router.post("/api/create-book-club", createBookClub)
router.post("/api/create-book-list", createBookList)

router.delete("/api/user/:id", deleteUser)
router.delete("/api/delete-book-club/:id", deleteBookClub)
router.delete("/api/delete-book-list/:id", deleteBookList)

module.exports = router;