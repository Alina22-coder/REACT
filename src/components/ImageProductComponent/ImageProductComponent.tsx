import type {FC} from "react";

type ImageProductPropType = {
    src: string;
    alt: string;
}

export const ImageProductComponent:FC<ImageProductPropType> = ({src, alt}) => {
    return <img src={src} alt={alt}/>;
};