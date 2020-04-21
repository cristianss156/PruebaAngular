import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Iva } from './iva';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const ivas = [
      { id: 1, valor: 4, tipo: 'Superreducido' },
      { id: 2, valor: 16, tipo: 'Reducido' },
      { id: 3, valor: 21, tipo: 'Normal' }
    ];
    return {ivas};
  }

  genValor(ivas: Iva[]): number {
    return ivas.length > 0 ? Math.max(...ivas.map(iva => iva.id)) + 1 : 4;
  }
}