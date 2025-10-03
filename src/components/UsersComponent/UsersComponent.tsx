import {useSearchParams} from "react-router";
import {useEffect, useState} from "react";
import type {UsersDummyjsonArrModel} from "../../models/UsersDummyjsonArrModel.ts";
import {UserComponent} from "../UserComponent/UserComponent.tsx";
import {loadUsersDummyjson} from "../../services/api.service.tsx";


export const UsersComponent = () => {
    const [query] = useSearchParams({pg:'1'});

    const [users, setUsers] = useState<UsersDummyjsonArrModel[]>([]);

    useEffect(() => {
        const currentPage = query.get('pg') || '1';
        loadUsersDummyjson(currentPage)
            .then(users => setUsers(users));
    }, [query]);

    return (
        <div>
            {
                users.map(user => (<UserComponent key={user.id} user={user}/>))
            }
        </div>
    )
}