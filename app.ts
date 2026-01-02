import express, { response } from 'express'

import { request } from 'node:http';

const app = express();
const port = 4002 ;

app.get("/" , (request, response) =>{
    response.send("Hello rafi sever is started @ port 4002")
})

app.listen(port , ()=>{
    console.log(`server running on port ${port}`)
})