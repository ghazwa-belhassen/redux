export const addTask = (description) => ({
    type: 'ADD_TASK',
    payload: {
      description,
    },
  });
  
  export const toggleTask = (taskId) => ({
    type: 'TOGGLE_TASK',
    payload: {
      taskId,
    },
  });
  
  export const editTask = (taskId, description) => ({
    type: 'EDIT_TASK',
    payload: {
      taskId,
      description,
    },
  });
  