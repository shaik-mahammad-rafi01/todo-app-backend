import express from 'express'

const app = express();
const port = 4002;

app.get("/", (request, response) => {
    response.send("Hello rafi sever is started @ port 4002")
})

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})