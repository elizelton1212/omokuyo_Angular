export interface Agencia{
name?:string;
city?:string;
province?:string;
phone?:string;
email?:string;
nib?:string;
country?:string;
geoposition?: {
    Latitude: number,
    Longitude: number
  }


}
