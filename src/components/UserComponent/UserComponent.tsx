import type {FC} from "react";
import type {UsersDummyjsonArrModel} from "../../models/UsersDummyjsonArrModel.ts";

type UserPropType = {
    user: UsersDummyjsonArrModel
}

export const UserComponent:FC<UserPropType> = ({user}) => {
    return (
        <div className='user-info'>
            {user.id} - {user.firstName} {user.lastName}
        </div>
    )
}