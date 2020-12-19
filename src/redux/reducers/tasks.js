const initialState = {
  tasks: [],
};

let newState = "";
let newTasks = ''

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case "TASK__LIST":
      return {
        ...state,
        tasks: action.payload,
      };
    case "ADD__TASK":
      newState = {
        ...state,
        tasks: [...state.tasks,action.payload],
      }
      return newState;
    case "TASK__DONE":
      newTasks = state.tasks.map(task=>{
        if(task.id===action.payload){
          task.done = !task.done
        }
        return task
      })
      newState = {
        ...state,
        tasks:newTasks
      }
      return newState;
    case "REMOVE__TASK":
      newTasks = state.tasks.splice(action.payload,1)
      newState = {...state}
      return newState;
    default:
      return state;
  }
};

export default tasks;
