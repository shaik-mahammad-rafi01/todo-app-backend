import type { Request, Response } from "express";
import { addNewTask, deleteTaskFromDB, editTaskService, getAllTasks } from "../services/taskServices";
import type { task } from "../types/task";

export const getTasks = async (request: Request, response: Response) => {
    try {
        const tasks = await getAllTasks()
        response.status(200).send(tasks)
    }
    catch {
        response.status(500).json({ error: "Failed to fetch task from the database" })
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

export const deleteTask = async (request: Request, response: Response) => {
    const id = request.params.id || "";

    if (!id) {
        response.status(404).send("Task id is need to delete the task so,provide it")
    }
    try {
        const result = await deleteTaskFromDB(id);
        return response.status(200).send(result);
    }
    catch {
        response.status(500).send("Failed to delete the task")
    }

}

export const editTask = async (request: Request, response: Response) => {
    try {
        let id = request.params.id as string;
        const updatedTask = request.body;
        if (!updatedTask.taskName || !updatedTask.description || !updatedTask.status || !updatedTask.priority || !updatedTask.Deadline) {
            return response.status(400).send("Please fill the fields");
        }
        const update = await editTaskService(id, updatedTask);
        if (!update) {
            return response.status(404).send("Task is not found")
        }
        return response.json(update)

    }
    catch {
        return response.status(500).send("Failed to edit the Task")
    }
}