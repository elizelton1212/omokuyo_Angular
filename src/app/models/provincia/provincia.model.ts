export interface Provincia{
  id?:string;
  nome?:string;
  imagem?:string;
  geoposition?: {
    Latitude: number,
    Longitude: number
  }
}
