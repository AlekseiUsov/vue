import { mutations, getters } from "../../src/store/index.js";

describe("newTask", () => {
    it("добавляет таск в лист", () => {
        const state = {
            tasks: [
                { id: 1, title: "Task 1", isChecked: false },
            ]
        }
        mutations.addTask(state, 'Task 5');
        expect(state.tasks.length).toBe(2);
    })
});

describe("changeStatusTask", () => {
    it("меняет значение определенного таска на противоположное", () => {
        const state = {
            tasks: [
                { id: 1, title: "Task 1", isChecked: false },
                { id: 2, title: "Task 2", isChecked: false },
                { id: 3, title: "Task 3", isChecked: false },
                { id: 4, title: "Task 4", isChecked: true },
            ]
        }
        mutations.changeStatusTask(state, 2);
        mutations.changeStatusTask(state, 4);
        expect(state.tasks[1].isChecked).toBe(true);
        expect(state.tasks[3].isChecked).toBe(false);
    })
});

describe("deleteTask", () => {
    it("удаляет определенный таск", () => {
        const state = {
            filter: "All",
        }
        mutations.setActiveTab(state, 'active');
        expect(state.filter).toBe('active');

        mutations.setActiveTab(state, 'complited');
        expect(state.filter).toBe('complited');
    })
});

describe("тестируем геттеры", () => {
    it("getters", () => {
        const state = {
            tasks: [
                { id: 1, title: "Task 1", isChecked: false },
                { id: 2, title: "Task 2", isChecked: true },
                { id: 3, title: "Task 3", isChecked: false },
            ],
            filter: "Active",
        }
        const actual = getters.filterTasks(state)
        expect(actual).toEqual([state.tasks[0], state.tasks[2]])
    })
});