import * as UserService from '../services/UserService';

export async function getCurrentUser(req, res, next) {
    const { token } = req;

    try {
        var user = await UserService.getUserByToken(token);
    } catch ({ message }) {
        return next({
            status: 500,
            message
        });
    }

    res.json(user);
}