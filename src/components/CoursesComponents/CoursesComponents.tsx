import type {CoursesArrayType} from "../../../data/data.ts";
import type {ReactNode} from "react";

interface ICourses {
    item:CoursesArrayType;
    children:ReactNode;
}

export const CoursesComponents = ({item,children}:ICourses) => {
    return (
            <div className='courses-components'>
                <h2>{item.title}</h2>
                <p>
                    {item.monthDuration} - months, {item.hourDuration} - hours
                </p>
                <ul>{children}</ul>
            </div>

    );
};