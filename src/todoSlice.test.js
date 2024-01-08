import reducer, { addTodo, deleteTodo, sortTodos } from "./todoSlice";

describe("reducer", () => {
  it("should display initial state", () => {
    expect(reducer(undefined, { type: undefined })).toEqual({ todos: [] });
  });
});

describe("addTodo", () => {
  it("should add todo to empty list", () => {
    const previousState = { todos: [] };

    expect(reducer(previousState, addTodo("New todo"))).toEqual({
      todos: [{ id: 0, text: "New todo" }],
    });
  });

  it("should add todo to list with existing todos", () => {
    const previousState = { todos: [{ id: 5, text: "Old todo" }] };

    expect(reducer(previousState, addTodo("New todo"))).toEqual({
      todos: [
        { id: 5, text: "Old todo" },
        { id: 6, text: "New todo" },
      ],
    });
  });
});
