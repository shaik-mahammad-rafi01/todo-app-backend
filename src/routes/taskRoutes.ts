import { getTasks , addTask} from "../controllers/taskController.js";
import { Router } from "express";

let taskRouter = Router();

taskRouter.get("/getTasks", getTasks);

export default taskRouter;