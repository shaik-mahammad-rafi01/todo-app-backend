import { getTasks, addTask, deleteTask, editTask } from "../controllers/taskController";
import { Router } from "express";

let taskRouter = Router();

taskRouter.get("/task", getTasks);
taskRouter.post("/task", addTask)
taskRouter.delete("/task/:id", deleteTask)
taskRouter.put("/task/:id", editTask)

export default taskRouter;