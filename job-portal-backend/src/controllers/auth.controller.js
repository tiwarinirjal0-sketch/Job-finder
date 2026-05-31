import dotenv from 'dotenv'
dotenv.config()

import UserModel from '../model/User.model.js';
import jwt from 'jsonwebtoken';
import { hashPassword, comparePassword } from '../utils/helper.js';
import mongoose from 'mongoose';
import { connectDB } from '../config/db.js';

connectDB()



export async function register(req, res) {
    try {
        const { username, password, email, profile } = req.body;

        const existingUsername = await UserModel.findOne({ username });
        if (existingUsername) return res.status(400).send({ error: 'Username err' });

        const existingEmail = await UserModel.findOne({ email });
        if (existingEmail) return res.status(400).send({ error: 'Email err' });

        const hashedPassword = await hashPassword(password);
        const newUser = await new UserModel({ username, password: hashedPassword, profile: profile || '', email }).save();

        const token = jwt.sign({_id : newUser._id}, process.env.JWT_SECRET_KEY, {expiresIn:'7d'})
        res.status(201).json({"message":"token sent successfully", token})

    } catch (err) {
        return res.status(500).send({err});
    }
}

export async function login(req, res) {
    try {
        const { email, password } = req.body;

        const user = await UserModel.findOne({ email });
        if (!user) return res.status(404).send({ error: 'User Not Found' });

        const isMatch = await comparePassword(password, user.password);
        if (!isMatch) return res.status(400).send({ error: 'Invalid Password' });

        const token = jwt.sign({ userId: user._id, username: user.username }, process.env.JWT_SECRET_KEY, { expiresIn: '7d' });

        return res.status(201).send({ msg: 'Login Successful', token });
    } catch (err) {
        console.error(err)
        return res.status(400).json({message : err.message});
    }
}

export async function getJobs(req, res){
    try {
        const db = mongoose.connection.db;
        const jobs = await db.collection("users").find().toArray()
        return res.status(200).json(jobs)
    } catch (error) {
        console.log("error happend", err)
    }

}