let moviedetails=[{
    id:1,
    name:"UstaadBhagat Singh",
    image:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/ustaad-bhagat-singh-et00339939-1771925113.jpg"},
{
    id:2,
    name:"ramayanam",
    image:"https://images.cdn.kukufm.com/f:webp/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/a2366b44cd5e4c76ae927b4b72f3fb44.jpeg"
},
{
    id:3,
    name:"Ananaganaga Oka Raju",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVFMvN81VDDLAKPOHMeTs78ezUUKj39VxU8A&s"
},
{
    id:4,
    name:"Champion",
    image:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/champion-et00465763-1762839329.jpg"
},
{
    id:5,
    name:"Mana Shankar Vara Prasad",
    image:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/mana-shankara-vara-prasad-garu-et00457184-1768291623.jpg"
},
{
    id:6,
    name:"The Girl Friend",
    image:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/the-girlfriend-et00423443-1733756569.jpg"
}]
exports.getAllMovies=()=>{
    return moviedetails;
}
exports.getMovieById=(id)=>{
    return moviedetails.find((movie)=>movie.id == id)
}
exports.addMovie=(movie)=>{
    moviedetails.push(movie)
    return movie;
}
exports.updateMovie = (id, updatedMovie) => {
    let index = moviedetails.findIndex(movie => movie.id == id);

    if (index !== -1) {
        moviedetails[index] = {
            ...moviedetails[index],
            ...updatedMovie
        };
        return moviedetails[index];
    }

    return null;
};
exports.deleteMovie = (id) => {
    let index = moviedetails.findIndex(movie => movie.id == id);

    if (index !== -1) {
        return moviedetails.splice(index, 1);
    }

    return null;
};
const Seat = require("../models/seats");

exports.addSeat = async (data) => {
    const newSeat = new Seat(data);
    return await newSeat.save();
};

exports.getbookedSeats = async () => {
    return await Seat.find();
};