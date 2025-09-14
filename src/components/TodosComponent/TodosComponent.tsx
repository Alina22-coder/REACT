import {useEffect, useState} from "react";
import type {TodoModel} from "../../models/TodoModel/TodoModel.ts";
import {loadTodos} from "../../servise/api.servise.ts";
import {TodoComponent} from "../TodoComponent/TodoComponent.tsx";


export const TodosComponent = () => {
    const [todos, setTodos] = useState<TodoModel[]>([]);

    useEffect(() => {
        loadTodos()
            .then(todos => setTodos(todos));
    }, []);


    return (
        <div className="todos">
            <h2 className="todo__title">TODOS</h2>
            <div className="todo__wrapper">
                {
                    todos.map(todo => (<TodoComponent key={todo.id} todo={todo}/>))
                }
            </div>
        </div>
    );
};