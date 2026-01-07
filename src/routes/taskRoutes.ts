import { getTasks, addTask, deleteTask, editTask } from "../controllers/taskController";
import { Router } from "express";

let taskRouter = Router();

taskRouter.get("/getTasks", getTasks);
taskRouter.post("/addTask", addTask)
taskRouter.delete("/deleteTask/:id", deleteTask)
taskRouter.put("/editTask/:id", editTask)

export default taskRouter;