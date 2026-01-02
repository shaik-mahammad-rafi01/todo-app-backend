import { getTasks , addTask} from "../controllers/taskController.js";
import { Router } from "express";

let taskRouter = Router();

taskRouter.get("/getTasks", getTasks);
taskRouter.post("/addTask" , addTask)

export default taskRouter;