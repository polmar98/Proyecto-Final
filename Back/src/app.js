import express from "express";
import indexRoutes from './routes/index.routes';
import path from 'path';
import morgan from "morgan";

const server = express();

//middlewares
server.use(morgan('dev'));
server.use(express.urlencoded({ extended: false}));

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
server.use(express.json());

//Routes
server.use('/', indexRoutes);

export default server;