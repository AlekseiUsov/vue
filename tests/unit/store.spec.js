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

describe("setActiveTab", () => {
    it("меняет активную кнопку таба", () => {
        const state = {
            filter: "All",
        }
        mutations.setActiveTab(state, 'active');
        expect(state.filter).toBe('active');

        mutations.setActiveTab(state, 'complited');
        expect(state.filter).toBe('complited');
    })
});


describe("deleteTask", () => {
    it("удаляет определенный таск", () => {
        const state = {
            tasks: [
                { id: 1, title: "Task 1", isChecked: false },
                { id: 2, title: "Task 2", isChecked: false },
                { id: 3, title: "Task 3", isChecked: false },
                { id: 4, title: "Task 4", isChecked: false },
            ]
        }
        mutations.deleteTask(state, 2);
        mutations.deleteTask(state, 4);
        expect(state.tasks).toEqual([{ id: 1, title: 'Task 1', isChecked: false }, { id: 3, title: "Task 3", isChecked: false }])
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
        state.filter = 'All'
        const actual2 = getters.filterTasks(state)
        expect(actual2).toEqual([state.tasks[0], state.tasks[1], state.tasks[2]])
        state.filter = 'Completed'
        const actual3 = getters.filterTasks(state)
        expect(actual3).toEqual([state.tasks[1]])

    })
});