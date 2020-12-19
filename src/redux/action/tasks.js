export const setTasks = (tasks) => ({
  type: "TASK__LIST",
  payload: tasks,
});

let id = 3

export const addTask = (task) => {
  id+=1
  return {
    type: "ADD__TASK",
    payload: {
      id: id,
      name: task,
      done: false,
    },
  }
};

export const doneTask = (id) => ({
  type: "TASK__DONE",
  payload: id,
});

export const removeTask = (id) => ({
  type: "REMOVE__TASK",
  payload: id,
});


