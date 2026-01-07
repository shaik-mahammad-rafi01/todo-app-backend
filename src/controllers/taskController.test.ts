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


}))

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