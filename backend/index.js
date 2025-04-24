require("dotenv").config();

const express=require("express");
const app=express();
const port=process.env.PORT || 3000;
const mongoUrl=process.env.Mongo_Url;
const cors=require("cors");
const bodyParser= require("body-parser");
const cookieParser = require('cookie-parser');

const dashboardRoutes=require("./routes/dashborad");
const userRoutes= require("./routes/user");

// used to send the data to dashborad securely and in a readable formate

app.use(cors({
    origin:  ["http://localhost:5173","http://localhost:5174"],
    credentials: true
}));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET)); 

const mongoose=require("mongoose");
async function main(){

    await mongoose.connect(mongoUrl);
}
main()
 .then(()=>{

    console.log("data base connected sucessfully");
 })
.catch((err)=>{

  console.log(err);
  
});

app.listen(port, ()=>{

    console.log(`sever start at port ${port}`);
})

// stating of our routes

app.get("/", (req, res)=>{

    res.send("this is trail routes");
});

// route for user setup

app.use("/", userRoutes);

// route to verify and get the current user details

app.use("/user", userRoutes);

// route through which we can get our data for dashboard

app.use("/mystocks", dashboardRoutes);



