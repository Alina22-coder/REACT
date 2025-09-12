import type {TodoModel} from "../../models/TodoModel.ts";
import type {FC} from "react";
import "../TodoComponent/TodoComponent.css"


type PropType = {
    todo:TodoModel
}

export const TodoComponent: FC<PropType> = ({todo:{id, title, completed}}) => {
    return (
        <>
            <p>{id} {title} - {completed.toString()}</p>
        </>
    );
}




