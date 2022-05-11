//@ts-check
import { Injectable } from '@angular/core';
import { Iva } from './iva';
import { Observable, of} from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class IvaService {

  private ivasUrl = 'http://localhost/html/demo-angular/php/listIva.php';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getIva (a: number): Observable<Iva> {
    const  params = new  HttpParams().set('q', "1").set('id', `${a}`);
    return this.http.get<Iva>(this.ivasUrl, {params}).pipe(
      tap(_ => this.log(`fetched iva id=${a}`)),
      catchError(this.handleError<Iva>(`getIva id=${a}`))
    );
  }

  getIvas (): Observable<Iva[]> {
    const params = new HttpParams().set('q', "2");
    return this.http.get<Iva[]>(this.ivasUrl, {params}).pipe(
        tap(_ => this.log('fetched ivas')),
        catchError(this.handleError<Iva[]>('getIvas', []))
      );
  }

  private log (message: string) {
    this.messageService.add(`IvaService: ${message}`);
  }

  private handleError<T> (operation= 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }

  updateIva (iva: Iva): Observable<any> {    
    const params = new HttpParams().set('q', "3").set('id', `${iva.id}`).set('valor', `${iva.valor}`).set('tipo', `${iva.tipo}`);
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), params};    
    return this.http.put(this.ivasUrl, iva, httpOptions).pipe(
      tap(_ => this.log(`update iva id=${iva.id}`)),
      catchError(this.handleError<any>('updateIva'))
    );
  }

  addIva (iva: Iva): Observable<Iva> {
    const params = new HttpParams().set('q', "4").set('valor', `${iva.valor}`).set('tipo', `${iva.tipo}`);    
    return this.http.get<Iva>(this.ivasUrl, {params}).pipe(
        tap((newIva: Iva) => this.log(`Añadido nuevo iva con id=${newIva.id}`)),
        catchError(this.handleError<Iva>('addIva'))
      );
  }

  deleteIva (iva: Iva | number): Observable<Iva> {    
    const id = typeof iva === 'number' ? iva : iva.id;
    const params = new HttpParams().set('q', "5").set('id', `${id}`);   
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), params};     
    return this.http.delete<Iva>(this.ivasUrl, httpOptions).pipe(
      tap(_ => this.log(`Iva borrado id=${id}`)),
      catchError(this.handleError<Iva>('deleteIva'))
    );
  }

  searchIva(term: string): Observable<Iva[]> {
    if (!term.trim()) {
      return of([]);
    }
    const params = new HttpParams().set('q', "6").set('tipo', `${term}`);
    return this.http.get<Iva[]>(this.ivasUrl, {params}).pipe(
      tap(_ => this.log(`Iva que coincide con "${term}"`)),
      catchError(this.handleError<Iva[]>('searchIva', []))
    );
  }
}
