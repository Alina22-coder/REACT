import type {FC} from "react";
import type {UsersJsonplaceholderModel} from "../../models/UsersModel/UsersJsonplaceholderModel/UsersJsonplaceholderModel.ts";

type UsersPropType = {
    user:UsersJsonplaceholderModel
}

export const UserComponent:FC<UsersPropType> = ({user:{id, name, username, email, address, phone, website, company}}) => {
    return (
        <div className="user-jsonplaceholder__wrap">
            <ul className="user-jsonplaceholder__list">
                <li className="user-jsonplaceholder__item">{id}</li>
                <li className="user-jsonplaceholder__item">Name: {name}</li>
                <li className="user-jsonplaceholder__item">Username: {username}</li>
                <li className="user-jsonplaceholder__item">
                    <a className="user-jsonplaceholder__link" href={`mailto:${email}`}>Email: <span>{email}</span></a>
                </li>
                <li className="user-jsonplaceholder__item">
                    Address:
                    <ul className="user-jsonplaceholder__list">
                        <li className="user-jsonplaceholder__item">street: {address.street}</li>
                        <li className="user-jsonplaceholder__item">suite: {address.suite}</li>
                        <li className="user-jsonplaceholder__item">city: {address.city}</li>
                        <li className="user-jsonplaceholder__item">zipcode: {address.zipcode}</li>
                        <li className="user-jsonplaceholder__item">geo lat: {address.geo.lat}</li>
                        <li className="user-jsonplaceholder__item">geo lng: {address.geo.lng}</li>
                    </ul>
                </li>
                <li className="user-jsonplaceholder__item">
                    Company:
                    <ul className="user-jsonplaceholder__list">
                        <li className="user-jsonplaceholder__item">name: {company.name}</li>
                        <li className="user-jsonplaceholder__item">catch phrase: {company.catchPhrase}</li>
                        <li className="user-jsonplaceholder__item">bs: {company.bs}</li>
                    </ul>
                </li>
                <li className="user-jsonplaceholder__item">
                    <a className="user-jsonplaceholder__link" href={`tel:${phone}`}> Phone: <span>{phone}</span></a>
                </li>
                <li className="user-jsonplaceholder__item">
                    <a className="user-jsonplaceholder__link" href={`https://${website}`} target="_blank">Website: <span>{website}</span></a>
                </li>
            </ul>


        </div>
    );
}