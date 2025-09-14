import type {CommentModel} from "./CommentModel.ts";

export interface CommentResponseDummyjsonModel {
    comments:CommentModel[];
    total: number;
    skip: number;
    limit: number;
}