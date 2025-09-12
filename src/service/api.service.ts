import type {TodoModel} from "../models/TodoModel.ts";

const todoUrl = import.meta.env.VITE_API_URL + '/todos';

const loadTodos = async ():Promise<TodoModel[]> => {
    return await fetch(todoUrl)
        .then(value => value.json())
}

export {loadTodos}