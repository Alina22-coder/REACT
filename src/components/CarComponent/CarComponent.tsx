import type {FC} from "react";
import type {ICarModel} from "../../models/CarModel/CarModel.ts";

type CarPropsType = {
    car: ICarModel
}

export const CarComponent:FC<CarPropsType> = ({car:{id,brand,price, year}}) => {
    return (
        <div className='car'>
            <h2>{id} - {brand}</h2>
            <p>${price}</p>
            <p>Year - {year}</p>
        </div>
    );
};