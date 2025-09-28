import type {ReactionsPostsDummyjsonArrModel} from "./ReactionsPostsDummyjsonArrModel";

export interface PostsDummyjsonArrModel {
    id: number,
    title: string,
    body: string,
    tags: string[],
    reactions: ReactionsPostsDummyjsonArrModel,
    views: number,
    userId: number
}

