const express=require("express");
const router=express.Router({mergeParams:true});

const UserModel=require("../modals/user");
const bcrypt=require("bcrypt");
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;
const userSchema=require("../schemaValidate");

// used to signup for user 

router.post("/signup", async(req, res)=>{

    let {formData}=req.body;
    try {
        
        await userSchema.validateAsync(formData);
    }
    catch (err) {
       
        return console.log(err);
    }

    let checkUserExist=await UserModel.find({email:formData.email});

    if(checkUserExist.length==0){

        bcrypt.hash(formData.password, 10, function (err, hash) {

            let newUser={...formData, password:hash}
            const addUser=new UserModel(newUser);
            addUser.save().then(()=>{

                res.json({
                    message: 'Register successfully, Goto login !!',
                    type: 'success',
                    redirect: '/login',
                });

            }).catch((err)=>{

                console.log(err);
            })
        });
    }
    else{

        res.json({
            message: 'Email already register !!',
            type: 'error',
        });
    }
});

// route for login user

router.post("/login", async(req, res)=>{

    let {loginData}=req.body;
    let user= await UserModel.find({email:loginData.email});
    
    if(user.length==0){

        return res.json({
            message: 'Invalid credentials !!',
            type: 'error',
        });
    }
     
    const match = await bcrypt.compare(loginData.password, user[0].password);
    if(match){
        
        const token = jwt.sign({ userid: user[0]._id }, jwtSecret, { expiresIn: '7d' });
        res.cookie('token', token, {
            httpOnly: true,
            signed: true,   
            secure: false,
            sameSite: 'Lax',
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        res.json({
            message: 'Login successfull !!',
            type: 'success',
            redirect: '/',
        });
    }
    else{
        
        res.json({
            message: 'Invalid credentials !!',
            type: 'error',
        });
    }
});

// verify jwt token

const verifyJwt = (req, res, next) => {
    const token = req.signedCookies.token; 
  
    if (!token) {

        return res.json({ message: 'Unauthorized: No token', type: 'error' });
    }
    try {

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();

    } catch (err) {

        return res.json({ message: 'Forbidden: Invalid token', type: 'error'});
    }
};   

router.get("/verify",verifyJwt, (req, res)=>{
    
    res.json(req.user);
});

//logout user

router.post("/logout", (req,res)=>{

    res.clearCookie('token', {
        httpOnly: true,
        secure: true,         
        sameSite: 'Lax', 
    });
    
    res.json({ message: 'Logged out successfully', type:"success" });
});

//api to get user details

router.get("/:id", async(req, res)=>{

    let id=(req.params.id);
    let user=await UserModel.find({_id:id});
    let{fullname}=user[0];

    res.json({

        userid:req.params.id,
        fullname:fullname,
    });
});

module.exports=router;