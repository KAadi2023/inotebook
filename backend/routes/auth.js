const express = require('express');
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = "Aadiisagoodb$oy";

// ROUTE 1: Create a User Using: POST "/api/auth/createuser". No login required
router.post('/createuser',[
    body('name', 'Enter a Valid Name').isLength({min: 3}),
    body('email', 'Enter a Valid email').isEmail(),
    body('password', 'Password must be atleast 5 chracters').isLength({min: 5})

], async (req, res)=>{
    let success = false;
    // if there are errors, return Bad Request and the errors
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({success, errors: errors.array() });
    }
    // Check wheather the user with this exists already
    try {
        let user = await User.findOne({email: req.body.email});
        if(user){
            return res.status(400).json({success, error: "Sorry a user with this email already exists"})
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt)
        
        // Create a New User
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass,
        });
        const data = {
            user:{
                id: user.id
            }
        }
        const authtoken  = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({success, authtoken}); 
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some Error Occured on Internal Server!!");
    }
} )


// ROUTE 2: Authenticate a User Using: POST "/api/auth/login". No login required
router.post('/login',[
    body('email', 'Enter a Valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),
], async (req, res)=>{
    let success = false;
    // if there are errors, return Bad Request and the errors
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    const {email, password} = req.body;
    try {
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({success, error: "Please Try to login with Valid Credentials."});
        }

        const passwordCompare = await bcrypt.compare(password, user.password);
        if(!passwordCompare){
            return res.status(400).json({success, error: "Please Try to login with Valid Credentials."});
        }

        const data = {
            user:{
                id: user.id
            }
        }
        const authtoken  = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({success, authtoken})

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some Error Occured on Internal Server!!");
    }

})


// ROUTE 3: Get Logged User Using: POST "/api/auth/getuser". login required
router.post('/getuser', fetchuser, async (req, res)=>{
    try {
        userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some Error Occured on Internal Server!!");
    }
})

module.exports = router;