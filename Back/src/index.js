import express from "express";

const server = express();

server.listen(3002, ()=>{
    console.log('Server Running on Port',3002);
});