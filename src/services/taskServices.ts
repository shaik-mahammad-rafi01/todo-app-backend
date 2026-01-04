import type { task } from "../types/task";
import db from "../db-config/firebaseConfig.js";

let TasksCollection = db.collection("todo-collection");

export const getAllTasks = async () => {
    let tasks = await TasksCollection.get();
    return tasks.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}

export const addNewTask = async (Task: task) => {
    const newTask = await TasksCollection.add(Task)
    return { id: newTask.id, ...Task }
}

export const deleteTaskFromDB = async (taskId: string) => {
    const task = await TasksCollection.doc(taskId).get();
    if (!task.exists) {
        return { message: "task with id not found" }
    }

    TasksCollection.doc(taskId).delete();
    return "Task deleted"
}

export const editTaskService = async (taskId: string, newTask: task) => {
    const previousTask = await TasksCollection.doc(taskId).get();

    if (!previousTask.exists) {
        return "Task is not available";
    }

    await TasksCollection.doc(taskId).update(newTask);
    const updatedTask = await TasksCollection.doc(taskId).get();

    return { id: taskId, ...updatedTask.data() }

}