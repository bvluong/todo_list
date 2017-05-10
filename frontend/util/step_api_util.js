export const fetchSteps = (todo_id) => (
  $.ajax({
    url: `api/todos/${todo_id}/steps`,
    method: 'GET',
  })
);

export const createStep = (step) => (
  $.ajax({
    url: 'api/steps',
    method: 'POST',
    data: { step }
  })
);

export const updateStep = (step) => (
  $.ajax({
    url: `api/steps/${step.id}`,
    method: 'PATCH',
    data: { step }
  })
);

export const deleteStep = (id) => (
  $.ajax({
    url: `api/steps/${id}`,
    method: 'DELETE',
  })
);
