import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Provincia } from '../../models/provincia/provincia.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {
  private provinceCollection = collection(this.fs, 'provincia');
  constructor(private fs:Firestore) { }

 async addProvince(provincia:Provincia):Promise<void>{
  try {
    const docref= await addDoc(this.provinceCollection,provincia);
    console.log('Dados Cadastrados com sucesso', docref.id);
    } catch (error) {
      console.log('Erro ao cadastrar os dados', error)
    }
    }

    getAllProvince(): Observable<Provincia[]> {
      const provinciaCollection = collection(this.fs, 'provincia');
      return collectionData(provinciaCollection, { idField: 'id' }) as Observable<Provincia[]>;
    }


  }





