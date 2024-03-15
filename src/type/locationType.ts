export interface IStoreLocationUserType {
  items: Item[];
}

interface Item {
  title: string;
  id: string;
  resultType: string;
  address: Address;
  position: Position;
  distance: number;
  mapView: MapView;
}

interface Address {
  label: string;
  countryCode: string;
  countryName: string;
  county: string;
  city: string;
  district: string;
  street: string;
  postalCode: string;
}

interface Position {
  latitude: number;
  longitude: number;
}

interface MapView {
  west: number;
  south: number;
  east: number;
  north: number;
}
