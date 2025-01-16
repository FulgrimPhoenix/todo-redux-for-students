export const addTodo = (text) => ({ type: 'ADD_TODO', text: text });
export const removeTodo = (id) => ({ type: 'DELETE_TODO', id: id });
export const changeTaskStatus = (id) => ({ type: 'CHANGE_DONE', id: id });
