import request from "supertest"
import { app } from "../app";
jest.mock("../services/taskServices", () => ({
    getAllTasks: jest.fn(() => ({
        taskName: "new todo app",
        priority: "low",
        status: "pending",
        description: "new app",
        Deadline: "03-01-2026"
    })),

    addNewTask: jest.fn(() => ({
        taskName: "new todo app",
        priority: "low",
        status: "pending",
        description: "new app",
        Deadline: "03-01-2026"
    })),

    deleteTaskFromDB: jest.fn(()=>"Task deleted")


}))
describe("controllers test cases", () => {

    test("It should return the task by calling getAllTask", async () => {
        const task = {
            taskName: "new todo app",
            priority: "low",
            status: "pending",
            description: "new app",
            Deadline: "03-01-2026"
        };
        const result = await request(app).get("/getTasks").send(task)
        expect(result.body).toEqual(task)

    })

    test("It should add a new task", async () => {
        const task = {
            taskName: "new todo app",
            priority: "low",
            status: "pending",
            description: "new app",
            Deadline: "03-01-2026"
        };
        const result = await request(app).post("/addTask").send(task)
        expect(result.body).toEqual(task)
    })

    test("It should delete task if exist", async() => {
        const task = {
            id:"123",
            taskName: "new todo app",
            priority: "low",
            status: "pending",
            description: "new app",
            Deadline: "03-01-2026"
        };
        const result = await request(app).delete("/deleteTask/123").send(task)
        expect(result.text).toBe("Task deleted")
    })
})