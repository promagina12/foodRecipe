export interface IAddress {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  coordinates: ICoordinates;
}

export interface ICoordinates {
  lat: number;
  lng: number;
}
