interface ApiName {
  title: string;
  first: string;
  last: string;
}

interface ApiStreet {
  number: number;
  name: string;
}

interface ApiCoordinates {
  latitude: string;
  longitude: string;
}

interface ApiTimezone {
  offset: string;
  description: string;
}

interface ApiLocation {
  street: ApiStreet;
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: ApiCoordinates;
  timezone: ApiTimezone;
}

interface ApiLogin {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

interface ApiDob {
  date: Date;
  age: number;
}

interface ApiRegistered {
  date: Date;
  age: number;
}

interface Id {
  name: string;
  value: string;
}

interface ApiPicture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface ApiResult {
  gender: string;
  name: ApiName;
  location: ApiLocation;
  email: string;
  login: ApiLogin;
  dob: ApiDob;
  registered: ApiRegistered;
  phone: string;
  cell: string;
  id: Id;
  picture: ApiPicture;
  nat: string;
}

interface ApiInfo {
  seed: string;
  results: number;
  page: number;
  version: string;
}

export default interface ApiResponseData {
  results?: ApiResult[];
  info?: ApiInfo;
}
