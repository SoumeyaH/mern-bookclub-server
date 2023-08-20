const { Router } = require("express");

const { findUser, deleteUser, createBookClub } = require("../controllers");

const router = Router();

router.get("/api/find-user/:username", findUser);

router.post("/api/create-book-club", createBookClub);

router.delete("/api/user/:id", deleteUser)

module.exports = router; 