import express from 'express';

import * as AuthController from '../controlers/auth';

const router = express.Router();

router.post('/signup', AuthController.signup);
router.post('/signin', AuthController.signin);

export default router;