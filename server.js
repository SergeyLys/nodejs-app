import express from 'express';
import mongoose from 'mongoose';
import session from 'express-session';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import bluebird from 'bluebird';
import cors from 'cors';
import path from 'path';
import config from './config';
import authRoute from './routes/auth';
import errorHandler from './middlewares/errorHandler';

const app = express();

mongoose.Promise = bluebird;
mongoose.connect(config.database, err => {
    if (err) throw err;

    console.log('Mongo connected');
});


app.listen(config.port, err => {
    if (err) throw err;

    console.log('Server is up and listening on port ' + config.port);
});



app.use(cors({origin: '*'}));
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: config.secret
}));
app.use(express.static(__dirname + '/public'));
app.get(/.*/, function (request, response){
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});
app.use('/api', authRoute);



app.use(errorHandler);

// test4free_