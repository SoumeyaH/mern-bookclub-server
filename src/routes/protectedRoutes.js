const { Router } = require("express");

const { 
    findUser, 
    deleteUser, 
    createBookClub, 
    getSingleUsersBookClubs, 
    findBookClub,
    deleteBookClub,
    createBookList,
    getSingleUsersBookLists,
    findBookList,
    deleteBookList } = require("../controllers");

const router = Router();

router.get("/api/find-user/:username", findUser)
router.get("/api/find-user-book-clubs/:id", getSingleUsersBookClubs)
router.get("/api/find-user-book-lists/:id", getSingleUsersBookLists)
router.get("/api/find-book-club/:title", findBookClub);
router.get("/api/find-book-list/:title", findBookList);

router.post("/api/create-book-club", createBookClub)
router.post("/api/create-book-list", createBookList)

router.delete("/api/user/:id", deleteUser)
router.delete("/api/delete-book-club/:id", deleteBookClub)
router.delete("/api/delete-book-list/:id", deleteBookList)

module.exports = router;