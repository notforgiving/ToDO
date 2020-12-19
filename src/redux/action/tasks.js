export const setTasks = (tasks) => ({
  type: "TASK__LIST",
  payload: tasks,
});

export const addTask = (task) => ({
  type: "ADD__TASK",
  payload: {
    id: 3,
    name: task,
    done: false,
  },
});

export const doneTask = (id) => ({
  type: "TASK__DONE",
  payload: id,
});

export const removeTask = (id) => ({
  type: "REMOVE__TASK",
  payload: id,
});


