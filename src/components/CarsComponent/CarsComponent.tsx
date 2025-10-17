import {useEffect, useState} from "react";
import type {ICarModel} from "../../models/CarModel/CarModel.ts";
import {getAllCars} from "../../services/api.service.ts";
import {CarComponent} from "../CarComponent/CarComponent.tsx";

export const CarsComponent = () => {
    const [cars, setCars] = useState<ICarModel[]>([])

    useEffect(() => {
        getAllCars()
            .then(cars => setCars(cars))
    }, []);

    return (
        <div className='cars-component'>
            {
                cars.map(car => (<CarComponent key={car.id} car={car}/>))
            }
        </div>
    );
};