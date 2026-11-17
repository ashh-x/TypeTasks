"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Helper for generating unique IDs
let nextId = 1;
// 3. addTask: returns a new array with a new "todo" task appended
function addTask(tasks, title) {
    const newTask = {
        id: nextId++,
        title,
        status: "todo",
    };
    return [...tasks, newTask];
}
// 4. completeTask: returns a new array with the matching task set to "done".
function completeTask(tasks, id) {
    return tasks.map((task) => task.id === id ? { ...task, status: "done" } : task);
}
// 5. filterByStatus: returns only tasks matching the given TaskStatus
function filterByStatus(tasks, status) {
    return tasks.filter((task) => task.status === status);
}
// 6. Extra original operation (required by assignment instructions)
// Advances a task one stage: "todo" -> "in-progress" -> "done"
function advanceTask(tasks, id) {
    return tasks.map((task) => {
        if (task.id !== id)
            return task;
        const nextStatus = task.status === "todo" ? "in-progress" : "done";
        return { ...task, status: nextStatus };
    });
}
function renameTask(tasks, id, newTitle) {
    return tasks.map((task) => task.id === id ? { ...task, title: newTitle } : task);
}
//# sourceMappingURL=model.js.map
