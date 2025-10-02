import {Outlet} from "react-router-dom";
import {CartsComponent} from "../../components/CartsComponent/CartsComponent.tsx";

export const CartsPage = () => {
    return(
        <div>
            <h2 className='carts-page__title'>Carts Page</h2>
            <CartsComponent/>
            <Outlet/>
        </div>
    )
}