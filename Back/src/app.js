import express from "express";
import indexRoutes from './routes/index.routes';
import path from 'path';

const server = express();

server.use(indexRoutes);

export default server;