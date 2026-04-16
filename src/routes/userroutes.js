const express = require("express");
const router = express.Router();

const {
    getMovies,
    getMovieById,
    createMovie,
    updateMovie,
    delMovie,
    bookedSeats,
    getSeats
} = require("../controllers/usercontrollers");

router.post("/seats",bookedSeats);
router.get("/seats", getSeats);
router.get("/", getMovies);
router.get("/:id", getMovieById);
router.post("/", createMovie);
router.patch("/:id", updateMovie); 
router.delete("/:id", delMovie);

module.exports = router;
