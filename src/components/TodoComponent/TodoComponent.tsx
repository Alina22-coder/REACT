import type {FC} from "react";
import type {TodoModel} from "../../models/TodoModel/TodoModel.ts";
import "../TodoComponent/TodoComponent.css"


type TodoProp = {
    todo:TodoModel
}

export const TodoComponent:FC<TodoProp> = ({todo:{id, todo, completed}}) => {
    return (
        <div className="todo__wrap">
            <ul className="todo__list">
                <li className="todo__item">id: {id}</li>
                <li className="todo__item">Todo: {todo}</li>
                <li className="todo__item">Completed: {completed.toString()}</li>
            </ul>
        </div>
    );
};