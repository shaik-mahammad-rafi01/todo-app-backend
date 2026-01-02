import type { Request, Response } from "express";
import { addNewTask, getAllTasks } from "../services/taskServices.js";
import type { task } from "../types/task.js";

export const getTasks = async (request: Request, response: Response) => {
    try {
        const tasks = await getAllTasks()
        response.status(200).send(tasks)
    }
    catch {
        response.status(500).send({ error: "Failed to fetch task from the database" })
    }
}

export const addTask = async (request: Request, response: Response) => {
    try {
        const Task: task = request.body;
        const newTask = await addNewTask(Task);
        response.status(201).json(newTask);
    } catch (error) {
        response.status(500).json({ error: "Failed to add task" });
    }
}