import type {GeoUsersJsonplaceholderModel} from "./GeoUsersJsonplaceholderModel.ts";

export interface AddressUsersJsonplaceholderModel {
    street: string,
    suite: string,
    city:string,
    zipcode: string,
    geo: GeoUsersJsonplaceholderModel
}