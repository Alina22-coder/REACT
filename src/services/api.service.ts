import type {ICarModel} from "../models/CarModel/CarModel.ts";
import axiosInstance from "../axios/axiosInstance.ts";

export const getAllCars = async ():Promise<ICarModel[]> => {
    const resp = await axiosInstance.get('/cars')
    const cars = resp.data;
    return cars;
}

export const addCar = async (car: ICarModel) => {
    await axiosInstance.post('/cars', car);
}

