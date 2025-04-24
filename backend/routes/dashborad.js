const express=require("express");
const router=express.Router({mergeParams:true});

const HoldingModel= require("../modals/holiding");
const WatchlistModel= require("../modals/watchlist");
const PositionModel= require("../modals/position");
const OrderModel = require("../modals/order");

//to get holding data

router.get("/allholding", async(req, res)=>{

    let allholding= await HoldingModel.find({});
    res.json(allholding);

});

// to see the watchlist data

router.get("/allwatchlist", async(req, res)=>{

    let allwatchlist= await WatchlistModel.find({});
    res.json(allwatchlist);
    
});

// to get the position data

router.get("/allposition", async(req, res)=>{

    let allposition= await PositionModel.find({});
    res.json(allposition);
    
});

//to add a new order

router.post("/neworder", async(req, res)=>{

    let newOrder=req.body;
    await OrderModel.insertOne(newOrder);
});

// to get all the order

router.get("/allorder", (req, res)=>{

    OrderModel.find({})
    .then((data)=>{

        res.json(data);
    })
    .catch((err)=>{

        console.log(err);
    })
    
});

module.exports=router;