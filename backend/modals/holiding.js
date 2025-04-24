const mongoose =require("mongoose");

const holdingSchema=new mongoose.Schema({

    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
});

const HoldingModel= mongoose.model("holding", holdingSchema);

module.exports= HoldingModel;