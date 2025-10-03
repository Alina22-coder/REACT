import {UsersComponent} from "../components/UsersComponent/UsersComponent.tsx";
import {Pagination} from "../pagination/Pagination.tsx";

export const UsersPage = () => {
    return (
        <div>
            <UsersComponent/>
            <Pagination/>
        </div>
    )
}