import {useEffect, useState} from "react";
import type {UsersJsonplaceholderModel} from "../../models/UsersModel/UsersJsonplaceholderModel/UsersJsonplaceholderModel.ts";
import {UserComponent} from "../UserComponent/UserComponent.tsx";
import {loadUsersJsonplaceholder} from "../../serviсe/api.serviсe.ts";
import "./UsersComponent.css";

export const UsersJsonComponent = () => {
    console.log("UsersJsonComponent rendered");
    const [users, setUsers] = useState<UsersJsonplaceholderModel[]>([]);

    useEffect(() => {
        loadUsersJsonplaceholder()
            .then(users => {
                console.log("Loaded users:", users);
                setUsers(users);
            })
    }, []);

    return (
        <div className="user-jsonplaceholder-component">
            {
             users.map(user => (<UserComponent key={user.id} user={user} />))
            }
        </div>
    )
}