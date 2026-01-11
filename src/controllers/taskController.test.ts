import request from "supertest"
import { app } from "../app";
jest.mock("../services/taskServices", () => ({
    getAllTasks: jest.fn(() => Promise.resolve([{
        taskName: "new todo app",
        priority: "low",
        status: "pending",
        description: "new app",
        Deadline: "03-01-2026"
    }])),

    addNewTask: jest.fn(() => ({
        taskName: "new todo app",
        priority: "low",
        status: "pending",
        description: "new app",
        Deadline: "03-01-2026"
    })),

    deleteTaskFromDB: jest.fn(() => "Task deleted"),
    editTaskService: jest.fn(() => ({
        id: "123",
        taskName: "new todo app",
        priority: "low",
        status: "pending",
        description: "new app",
        Deadline: "03-01-2026"
    }))
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
        const result = await request(app).get("/task").send(task)
        expect(result.body).toHaveLength(1)

    })

    test("It should add a new task", async () => {
        const task = {
            taskName: "new todo app",
            priority: "low",
            status: "pending",
            description: "new app",
            Deadline: "03-01-2026"
        };
        const result = await request(app).post("/task").send(task)
        expect(result.body).toEqual(task)
    })

    test("It should delete task if exist", async () => {
        const task = {
            id: "123",
            taskName: "new todo app",
            priority: "low",
            status: "pending",
            description: "new app",
            Deadline: "03-01-2026"
        };
        const result = await request(app).delete("/task/123").send(task)
        expect(result.text).toBe("Task deleted")
    })

    test("It should edit an existing task updated data", async () => {
        const task = {
            id: "123",
            taskName: "new todo app",
            priority: "low",
            status: "pending",
            description: "new app",
            Deadline: "03-01-2026"
        };

        const result = await request(app).put("/task/123").send(task)
        expect(result.body.id).toEqual("123")
    })
})