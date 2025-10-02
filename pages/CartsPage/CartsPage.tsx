import {CartsComponent} from "../../components/CartsComponent/CartsComponent.tsx";
import {Outlet} from "react-router-dom";

export const CartsPage = () => {
    return (
        <div>
            <h2 className="carts-page__title">Carts Page</h2>
            <CartsComponent/>
            <Outlet/>
        </div>
    )
}