// 1. TaskStatus literal union
type TaskStatus = "todo" | "in-progress" | "done";

// 2. Task interface
interface Task {
  id: number;
  title: string;
  status: TaskStatus;
}

// Helper for generating unique IDs
let nextId = 1;

// 3. addTask: returns a new array with a new "todo" task appended
function addTask(tasks: Task[], title: string): Task[] {
  const newTask: Task = {
    id: nextId++,
    title,
    status: "todo",
  };
  return [...tasks, newTask];
}

// 4. completeTask: returns a new array with the matching task set to "done"
function completeTask(tasks: Task[], id: number): Task[] {
  return tasks.map((task) =>
    task.id === id ? { ...task, status: "done" } : task
  );
}

// 5. filterByStatus: returns only tasks matching the given TaskStatus
function filterByStatus(tasks: Task[], status: TaskStatus): Task[] {
  return tasks.filter((task) => task.status === status);
}

// 6. Extra original operation (required by assignment instructions)
// Advances a task one stage: "todo" -> "in-progress" -> "done"
function advanceTask(tasks: Task[], id: number): Task[] {
  return tasks.map((task) => {
    if (task.id !== id) return task;
    const nextStatus: TaskStatus =
      task.status === "todo" ? "in-progress" : "done";
    return { ...task, status: nextStatus };
  });
}
function renameTask(tasks: Task[], id: number, newTitle: string): Task[] {
  return tasks.map((task) =>
    task.id === id ? { ...task, title: newTitle } : task
  );
}