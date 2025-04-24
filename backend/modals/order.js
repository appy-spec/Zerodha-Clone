const mongoose =require("mongoose");

const orderSchema= new mongoose.Schema({

    name: String,
    qty: Number,
    price: Number,
    mode: String,
});

const OrderModel= mongoose.model("order", orderSchema);

module.exports=OrderModel;