import {useForm} from "react-hook-form";
import type {ICarModel} from "../../models/CarModel/CarModel.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/carValidator.ts";
import {addCar} from "../../services/api.service.ts";

const CreateCarPage = () => {
    const {handleSubmit, register, reset,formState:{errors}}= useForm<ICarModel>({mode:'all', resolver:joiResolver(carValidator)})

    const createHandleSubmit = async (data: ICarModel) => {
        try{
            await addCar(data);
            alert("Машину успішно додано!");
            console.log(data);
            reset();
        }catch (error) {
            console.error("❌ Помилка при створенні машини:", error);
            alert("Помилка при додаванні машини. Спробуй ще раз.");
        }
    }

    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit(createHandleSubmit)}>
                <div>
                    <label>
                        <input type='text' {...register ('brand')} placeholder="Enter car brand"/>
                        {errors.brand && <div>{errors.brand.message}</div>}
                    </label>
                </div>
                <div>
                    <label>
                        <input type='number' {...register ('price')} placeholder="Enter price"/>
                        {errors.price && <div>{errors.price.message}</div>}
                    </label>
                </div>
                <div>
                    <label>
                        <input type='number' {...register ('year')} placeholder="Enter year"/>
                        {errors.year && <div>{errors.year.message}</div>}
                    </label>
                </div>
                <button type="submit">Add car</button>
            </form>
        </div>
    );
};
export default CreateCarPage