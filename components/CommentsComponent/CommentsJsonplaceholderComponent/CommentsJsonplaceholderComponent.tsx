import {Outlet} from "react-router-dom";
import {CommentsJSONPlaceholderComponent} from "../CommentsJSONPlaceholderComponent.tsx";

export const CommentsJsonplaceholderComponent = () => {
    return (
        <div className="comments-jsonplaceholder">
            <h2 className="comments-jsonplaceholder__title">Comments Jsonplaceholder Component</h2>
            <CommentsJSONPlaceholderComponent/>
            <Outlet/>
        </div>
    );
};