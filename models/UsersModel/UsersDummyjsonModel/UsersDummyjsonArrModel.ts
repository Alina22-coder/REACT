import type {HairUsersDummyjsonArrModel} from "./HairUsersDummyjsonArrModel.ts";
import type {AddressUsersDummyjsonArrModel} from "./AddressUsersDummyjsonArrModel.ts";
import type {BankUsersDummyjsonArrModel} from "./BankUsersDummyjsonArrModel.ts";
import type {CompanyUsersDummyjsonArrModel} from "./CompanyUsersDummyjsonArrModel.ts";
import type {CryptoUsersDummyjsonArrModel} from "./CryptoUsersDummyjsonArrModel.ts";


export interface UsersDummyjsonArrModel {
    id: number,
    firstName: string,
    lastName: string,
    maidenName: string,
    age: number,
    gender: string,
    email: string,
    phone: string,
    username: string,
    password: string,
    birthDate: string,
    image: string,
    bloodGroup: string,
    height: number,
    weight: number,
    eyeColor: string,
    hair: HairUsersDummyjsonArrModel,
    ip: string,
    address: AddressUsersDummyjsonArrModel,
    macAddress: string,
    university: string,
    bank: BankUsersDummyjsonArrModel,
    company: CompanyUsersDummyjsonArrModel,
    ein: string,
    ssn:string,
    userAgent: string,
    crypto: CryptoUsersDummyjsonArrModel,
    role: string
}















