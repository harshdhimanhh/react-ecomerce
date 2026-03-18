import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const SignupUser = async (req, res) => {
    try {
        // console.log
        console.log(req,req.body);
        const { name, email, password } = req.body;

        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({
                message: "User already exists",
            });
        }

        // hash password
        const hashPassword = await bcrypt.hash(password, 10);

        // create user
        await User.create({
            name,
            email,
            password: hashPassword,
        });

        res.status(201).json({
            message: "User registered successfully",
        });

    } catch (error) {
        res.status(500).json({
            message: "server error",
            error: error.message,
        });
    }
};