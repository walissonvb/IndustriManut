import { FirebaseService } from 'src/app/servico/firebase.service';
import { Injectable,} from '@angular/core';
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
  getDoc
} from 'firebase/firestore';
import { firstValueFrom } from 'rxjs';

export interface Indicadres {
  id: string;
  mtbf: string;
  mes: string;
}

@Injectable({
  providedIn: 'root'
})
export class IndicadoresService {
  private indicadorCollection = collection(this.firebaseService.db, "indicadores");

  constructor(
    private firebaseService: FirebaseService
  ) { }

 async readIndica(){
    try {
      const user = await firstValueFrom(this.firebaseService.authState);
      if(!user){
        console.log('nehum indicador encontrado')
          return [];
      }

      const userId = user.uid;
      console.log(`id do usuario:  ${userId}`);

      const querySnapshot = await getDocs(query(this.indicadorCollection, where('userId', '==', userId)));
      const indicadres: Indicadres[] = [];

      querySnapshot.forEach((doc) => {
        indicadres.push({ id: doc.id, ...doc.data() } as Indicadres);
      });
      console.log('Dados suscess ', userId, indicadres);
      return indicadres;
    } catch (error) {
      console.error('Erro ao ler dados:', error);
      throw error;

    }
  }
}
