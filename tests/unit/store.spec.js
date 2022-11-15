import { state, mutations, getters } from "../../src/store/index.js";
import { v4 as uuidv4 } from "uuid";

describe("newTask", () => {
    it("добавляет таск в лист", () => {
        const testTasks = [
            { id: 1, title: "Task 1", isChecked: false },
        ]
        const newTask = {
            id: uuidv4(),
            title: "Task 4",
            isChecked: false,
        };
        mutations.addTask(testTasks, newTask);
        expect(testTasks.length).toBe(2);
    })
});
