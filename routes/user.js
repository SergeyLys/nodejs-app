import express from 'express';
import * as UserController from '../controlers/user';

const router = express.Router();

router.get('/current-user', UserController.getCurrentUser);

export default router;