import server from './app';
import './database';

server.listen(3002, ()=>{
    console.log('Server Running on Port',3002);
});