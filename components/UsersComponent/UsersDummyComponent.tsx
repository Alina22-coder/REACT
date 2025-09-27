import {useEffect, useState} from "react";
import {loadUsersDummyjson} from "../../servise/api.servise";
import {UserDummyComponent} from "../UserComponent/UserDummyComponent.tsx";
import type {UsersDummyjsonArrModel} from "../../models/UsersModel/UsersDummyjsonModel/UsersDummyjsonArrModel.ts";

export const UsersDummyComponent = () => {
    const [usersDummy, setUsersDummy] = useState<UsersDummyjsonArrModel[]>([]);
    useEffect(() => {
        loadUsersDummyjson()
            .then(usersDummy => {
                console.log("Loaded users:", usersDummy);
                setUsersDummy(usersDummy);
            })
    }, []);

    return(
        <div className="user-dummyjson-component">
            {
                usersDummy.map(userDummy => (<UserDummyComponent key={userDummy.id} userDummy={userDummy}/>))
            }
        </div>
    )
}