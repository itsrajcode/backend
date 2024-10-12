const fs = require("fs");

const filePath = "./tasks.json";

const loadtasks = () => {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  } catch (error) {
    console.log("Error loading tasks:", error);
    return [];
  }
};

const saveTasks = (tasks) => {
  const data = JSON.stringify(tasks, null, 2);
  fs.writeFileSync(filePath, data);
};

const addtask = (task) => {
  const tasks = loadtasks();
  tasks.push({ task: task});
  saveTasks(tasks);
  console.log("Task added:", task);
};

const listtasks = () => {
  const tasks = loadtasks();
  console.log("Tasks:", tasks);
};

const deletetask = (index) => {
  const tasks = loadtasks();
  if (index >= 0 && index < tasks.length) {
    tasks.splice(index, 1);
    saveTasks(tasks);
    console.log("Task deleted at index:", index);
  } else {
    console.log("Invalid index");
  }
};

const command = process.argv[2];
const argument = process.argv[3];

if (command === "add") {
  addtask(argument);
} else if (command === "list") {
  listtasks();
} else if (command === "delete") {
  deletetask(parseInt(argument));
} else {
  console.log("Invalid command");
}
