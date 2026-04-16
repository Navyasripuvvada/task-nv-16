const userService = require("../services/userservices");
exports.getMovies = (req, res) => {
    const Movies = userService.getAllMovies();
    res.json(Movies);
};

exports.getMovieById = (req, res) => {
    const Movie = userService.getMovieById(req.params.id);
    res.json(Movie);
};

exports.createMovie = (req, res) => {
    const newmovie = userService.addMovie(req.body);
    res.json(newmovie);
};

exports.updateMovie = (req, res) => {
    const upmovie = userService.updateMovie(req.params.id, req.body);
    res.json(upmovie);
};

exports.delMovie = (req, res) => {
    const deletionmovie = userService.deleteMovie(req.params.id);
    res.json(deletionmovie);
};
const Seat=require("../models/seats")
exports.bookedSeats = async (req, res)=>{
    try{
    const { seatNumber,user,totalPrice } = (req.body);
    const existingseat= await Seat.findOne({ seatNumber})
    if(existingseat){
        return res.status(400).json({
            message:"seats already booked"
        })
    }
    const newBooking= new Seat({
        seatNumber,
        user,
        totalPrice,
        isBooked:true
    })
        await newBooking.save();

            res.status(201).json({
                message: "Seat booked successfully",
                data: newBooking
            });

        } catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    }
    
exports.getSeats = async (req, res) => {
    try {
        const seats = await Seat.find(); 
        res.json(seats);

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};
