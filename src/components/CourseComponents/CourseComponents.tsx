import {coursesArray, type CoursesArrayType} from "../../../data/data.ts";
import {CoursesComponents} from "../CoursesComponents/CoursesComponents.tsx";
import "../CoursesComponents/CoursesComponents.css";

export const CourseComponents = () => {
    return (
        <>
        <div>
            {
                coursesArray.map((course:CoursesArrayType, index:number) => <CoursesComponents key={index} item={course}>
                    {course.modules.map((module:string) => (
                            <li>
                                {module}
                            </li>
                    ))}
                </CoursesComponents>)
            }
        </div>
        </>
    );
};