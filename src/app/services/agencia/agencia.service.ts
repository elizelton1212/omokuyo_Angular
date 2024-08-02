import { Injectable } from '@angular/core';
import { Agencia } from '../../models/agencia.model';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class AgenciaService {
  private agenceCollection = collection(this.fs, 'agencia');
  constructor(private fs:Firestore) { }


async saveAgence(agencia:Agencia):Promise<void>{
try {
const docref= await addDoc(this.agenceCollection,agencia);
console.log('Dados Cadastrados com sucesso', docref.id);

} catch (error) {
  console.log('Erro ao cadastrar os dados', error)
}


}


}
