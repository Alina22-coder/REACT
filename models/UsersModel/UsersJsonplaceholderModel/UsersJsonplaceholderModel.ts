import type {AddressUsersJsonplaceholderModel} from "./AddressUsersJsonplaceholderModel.ts";
import type {CompanyUsersJsonplaceholderModel} from "./CompanyUsersJsonplaceholderModel.ts";

export interface UsersJsonplaceholderModel {
    id: number,
    name: string,
    username: string,
    email: string,
    address: AddressUsersJsonplaceholderModel,
    phone: string,
    website: string,
    company: CompanyUsersJsonplaceholderModel
}





