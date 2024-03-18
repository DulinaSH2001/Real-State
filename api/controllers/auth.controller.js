import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken';
export const signup = async (req,res,next) =>{
    const {username,email,password} =req.body;
    const hashPassword = bcryptjs.hashSync(password,10);
    const newUser = new User({username,email,password:hashPassword});
    try {
        await newUser.save();
        res.status(201).json("user created successfully");
    } catch (error) {
       next(error);
    }
    
};


export const signin = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const validuser = await User.findOne({ email });

        // If user is not found, return error
        if (!validuser) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Verify password
        const isPasswordValid = bcryptjs.compareSync(password, validuser.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid email or password" });
        };
        const token =jwt.sign({id: validuser._id},process.env.JWT_SECRET)
        res.cookie('access_token',token,{httpOnly:true});
        const {password:pass,...rest}=validuser._doc;

        // // If email and password are valid, return success message or user data
         res
         .status(200)
        // .json({ message: "Sign in successful", user: { id: user._id, username: user.username, email: user.email } })
         .status(200)
         .json(rest);
    } catch (error) {
        next(error);
    }
};
