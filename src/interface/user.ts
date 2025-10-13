import { IAddress } from "./address";

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: string;
  gender: string;
  email: string;
  phone: string;
  username: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  address: IAddress;
  university: string;
  role: string;
}
