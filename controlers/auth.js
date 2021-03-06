import jwt from 'jsonwebtoken';
import User from '../models/user';
import config from '../config';

export const signup = async (req, res, next)=> {
    const credential = req.body;
    let user;

    try {
        user = await User.create(credential);
    } catch ({ message }) {
        return next({
            status: 400,
            message
        });
    }

    const { login, password } = req.body;

    user = await User.findOne({ login });

    // res.json(user);

    const token = jwt.sign({ _id: user._id }, config.secret);
    res.json(token);
};

export const signin = async (req, res, next)=> {
    const { login, password } = req.body;

    const user = await User.findOne({ login });

    if (!user) {
        return next({
            status: 400,
            message: 'User not found'
        });
    }

    try {
        const result = await user.comparePasswords(password);
    } catch (e) {
        return next({
            status: 400,
            message: 'Bad credentials'
        });
    }

    const token = jwt.sign({ _id: user._id }, config.secret);
    res.json(token);
};