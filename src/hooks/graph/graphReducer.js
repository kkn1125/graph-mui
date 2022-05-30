const GraphReducer = (state, action) => {
  const date = state.findIndex((item) => item.date === action.date);
  switch (action.type) {
    case "CREATE":
      // action. date/task
      return date === -1
        ? state.concat({
            id: action.id,
            tasks: [
              {
                task: action.task,
                done: false,
              },
            ],
            date: action.date,
          })
        : state.map((item) =>
            item.date === action.date
              ? {
                  ...item,
                  tasks: item.tasks.concat({
                    task: action.task,
                    done: false,
                  }),
                }
              : item
          );
    case "TOGGLE":
      return state.map((item) =>
        item.id === action.id
          ? {
              ...item,
              tasks: item.tasks.map((task, idx) =>
                idx === action.idx
                  ? {
                      ...task,
                      done: !task.done,
                    }
                  : task
              ),
            }
          : item
      );
  }
};

export { GraphReducer };
