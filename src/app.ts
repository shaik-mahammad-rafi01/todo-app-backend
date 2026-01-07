import express from 'express';
import taskRouter from './routes/taskRoutes';
import dotenv from "dotenv";
dotenv.config();

export const app = express();
app.use(express.json())
const port = process.env.PORT;

app.use("/", taskRouter)

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})