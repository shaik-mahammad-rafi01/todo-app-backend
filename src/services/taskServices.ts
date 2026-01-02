import { db } from "../db-config/firebaseConfig.js";

let TasksCollection = db.collection("todo-collection");

export const getAllTasks = async()=>{
    let tasks = await TasksCollection.get();
    return tasks.docs.map(doc => ({id : doc.id , ...doc.data()}))
}

