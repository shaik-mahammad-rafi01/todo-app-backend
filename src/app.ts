import express from 'express';
import taskRouter from './routes/taskRoutes.js';

const app = express();
app.use(express.json())
const port = 4002;

app.use("/", taskRouter)

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})