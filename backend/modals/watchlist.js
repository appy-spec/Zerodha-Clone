const mongoose=require("mongoose");

const watchlistSchema= new mongoose.Schema({

    name: String,
    price: Number,
    percent: String,
    isDown: Boolean,
});

const WatchlistModel= mongoose.model("watchlist", watchlistSchema);

module.exports= WatchlistModel;