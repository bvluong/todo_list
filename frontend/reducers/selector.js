export const allTodos = (state) => {
  const ids = Object.keys(state.todos);
  return ids.map( (id) => state.todos[id] );
};

export const stepsByToDoId = (state, todoId) => {
  const ids = Object.keys(state.steps);
  const steps = ids.map( (id) => state.steps[id] );
  return steps.filter( step => step.todo_id === todoId );
};
