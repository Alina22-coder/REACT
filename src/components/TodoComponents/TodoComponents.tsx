import {useEffect, useState} from "react";
import {loadTodos} from "../../service/api.service.ts";
import type {TodoModel} from "../../models/TodoModel.ts";
import {TodoComponent} from "../TodoComponent/TodoComponent.tsx";


export const TodoComponents = () => {
    const [todos, setTodos] = useState<TodoModel[]>([]);

    useEffect(() => {
      loadTodos().then(value => setTodos(value));
    }, []);


    return (
        <div>
            {
                todos.map((todo) => <TodoComponent key={todo.id} todo={todo}/>)
            }
        </div>
    );
}
