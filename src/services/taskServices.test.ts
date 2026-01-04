import { addNewTask, deleteTaskFromDB, editTaskService, getAllTasks } from "./taskServices";
jest.mock("../db-config/firebaseConfig", () => ({
    collection: jest.fn(() => ({
        get: jest.fn(() => ({
            docs: [

                { id: "123", data: jest.fn(() => ({ name: "data" })) }

            ]
        }))
        ,
        add: jest.fn(() => ({ id: "628142" })),
        doc: jest.fn(() => ({
            get: jest.fn(() => ({
                exists: true,
                data: jest.fn(() => ({
                    taskName: "new todo app",
                    priority: "low",
                    status: "pending",
                    description: "new app",
                    Deadline: "03-01-2026"
                }))
            })),
            update: jest.fn(),
            delete: jest.fn()

        }))
    }))


}))
describe("Task services test cases", () => {
    test("addTask", async () => {

        const task = await addNewTask({
            priority: 'high',
            description: 'native',
            status: 'pending',
            taskName: 'todo',
            Deadline: '04-1-2026'
        });
        expect(task.id).toBe("628142");
        expect(task.taskName).toBe("todo")
    })

    test("getAllTasks", async () => {
        const tasks = await getAllTasks();

        expect(tasks).toHaveLength(1)

    })
})
