import type {TodoModel} from "./TodoModel.ts";

export interface TodoResponseDummyjsonModel {
    todos:TodoModel[];
    total:number;
    skip:number;
    limit:number
}