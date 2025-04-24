const mongoose= require("mongoose");

const positionSchema=new mongoose.Schema({

    product: String,
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss: Boolean,
});

const PositionModel= mongoose.model("position", positionSchema);

module.exports= PositionModel;