import type {FC} from "react";
import type {UsersDummyjsonArrModel} from "../../models/UsersModel/UsersDummyjsonModel/UsersDummyjsonArrModel.ts";

type UserDummyPropType ={
    userDummy:UsersDummyjsonArrModel
}

export const UserDummyComponent:FC<UserDummyPropType> = ({userDummy:{id, firstName, lastName,maidenName,age,gender,email,username,password,birthDate,image,bloodGroup,height,
    weight,eyeColor,hair,ip,address,macAddress,university,bank,company,ein,ssn,userAgent,crypto,role}}) => {
    return (
        <div className="user-dummyjson__wrap">
            <ul className="user-dummyjson__list">
                <li className="user-dummyjson__item">{id}</li>
                <li className="user-dummyjson__item">First name: {firstName}</li>
                <li className="user-dummyjson__item">Last name: {lastName}</li>
                <li className="user-dummyjson__item">Maiden name: {maidenName}</li>
                <li className="user-dummyjson__item">Age: {age}</li>
                <li className="user-dummyjson__item">Gender: {gender}</li>
                <li className="user-dummyjson__item">
                    <a className="user-dummyjson__link" href={`mailto ${email}`}>Email: <span>{email}</span></a>
                </li>
                <li className="user-dummyjson__item">Username: {username}</li>
                <li className="user-dummyjson__item">Password: {password}</li>
                <li className="user-dummyjson__item">Birth date: {birthDate}</li>

                <li className="user-dummyjson__item">
                    <img className="user-dummyjson__img" src={image} alt={`${firstName} ${lastName}`}/>
                </li>




                <li className="user-dummyjson__item">Blood group: {bloodGroup}</li>
                <li className="user-dummyjson__item">Height: {height}</li>
                <li className="user-dummyjson__item">Weight: {weight}</li>
                <li className="user-dummyjson__item">Eye color: {eyeColor}</li>
                <li className="user-dummyjson__item">
                    Hair:
                    <ul className="user-dummyjson__list">
                        <li className="user-dummyjson__item">color: {hair.color}</li>
                        <li className="user-dummyjson__item">type: {hair.type}</li>

                    </ul>
                </li>
                <li className="user-dummyjson__item">Ip: {ip}</li>

                <li className="user-dummyjson__item">
                    Address:
                    <ul className="user-dummyjson__list">
                        <li className="user-dummyjson__item">address: {address.address}</li>
                        <li className="user-dummyjson__item">city: {address.city}</li>
                        <li className="user-dummyjson__item">state: {address.state}</li>
                        <li className="user-dummyjson__item">state code: {address.stateCode}</li>
                        <li className="user-dummyjson__item">postal code: {address.postalCode}</li>
                        <li className="user-dummyjson__item">
                            Coordinates:
                            <ul className="user-dummyjson__list">
                                <li className="user-dummyjson__item">lat: {address.coordinates.lat}</li>
                                <li className="user-dummyjson__item">lng: {address.coordinates.lng}</li>
                            </ul>
                        </li>
                        <li className="user-dummyjson__item">country: {address.country}</li>
                    </ul>
                </li>
                <li className="user-dummyjson__item">Mac address: {macAddress}</li>
                <li className="user-dummyjson__item">University: {university}</li>
                <li className="user-dummyjson__item">
                    Bank:
                    <ul className="user-dummyjson__list">
                        <li className="user-dummyjson__item">card expire: {bank.cardExpire}</li>
                        <li className="user-dummyjson__item">card number: {bank.cardNumber}</li>
                        <li className="user-dummyjson__item">card type: {bank.cardType}</li>
                        <li className="user-dummyjson__item">currency: {bank.currency} </li>
                        <li className="user-dummyjson__item">iban: {bank.iban}</li>
                    </ul>
                </li>
                <li className="user-dummyjson__item">
                    Company:
                    <ul className="user-dummyjson__list">
                        <li className="user-dummyjson__item">department: {company.department}</li>
                        <li className="user-dummyjson__item">name: {company.name}</li>
                        <li className="user-dummyjson__item">title: {company.title}</li>
                        <li className="user-dummyjson__item">
                            Address:
                            <ul className="user-dummyjson__list">
                                <li className="user-dummyjson__item">address: {company.address.address} </li>
                                <li className="user-dummyjson__item">city: {company.address.city}</li>
                                <li className="user-dummyjson__item">state: {company.address.state} </li>
                                <li className="user-dummyjson__item">state code: {company.address.stateCode}</li>
                                <li className="user-dummyjson__item">postal code: {company.address.postalCode} </li>
                                <li className="user-dummyjson__item">
                                    Coordinates:
                                    <ul className="user-dummyjson__list">
                                        <li className="user-dummyjson__item">lat: {company.address.coordinates.lat}</li>
                                        <li className="user-dummyjson__item">lng: {company.address.coordinates.lng}</li>
                                    </ul>
                                </li>
                                <li className="user-dummyjson__item">country: {company.address.country}</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="user-dummyjson__item">Ein: {ein}</li>
                <li className="user-dummyjson__item">Ssn: {ssn}</li>
                <li className="user-dummyjson__item">User agent: {userAgent}</li>
                <li className="user-dummyjson__item">
                    Crypto:
                    <ul className="user-dummyjson__list" >
                        <li className="user-dummyjson__item">coin: {crypto.coin}</li>
                        <li className="user-dummyjson__item">wallet: {crypto.wallet}</li>
                        <li className="user-dummyjson__item">network: {crypto.network}</li>
                    </ul>
                </li>
                <li className="user-dummyjson__item">Role: {role}</li>
            </ul>
        </div>
    );
}

