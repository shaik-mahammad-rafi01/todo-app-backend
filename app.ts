import express from 'express';
import taskRouter from './src/routes/taskRoutes';

const app = express();
app.use(express.json())
const port = 4002;

app.use("/", taskRouter)

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})