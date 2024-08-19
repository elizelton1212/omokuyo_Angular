export interface Districto{
  id?:string;
  nome?:string;
  imagem?:string;
  geoposition?: {
    Latitude: number,
    Longitude: number
  }
}
