import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
// import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl        : string = 'https://restcountries.com/v3.1';
  private apiUrlRegiones: string = 'https://restcountries.com/v2';

  get httpParams () {
    return new HttpParams().set( 'fields', 'name,capital,cca2,flags,population' );
  }

  constructor( private http: HttpClient ) { }

  buscarPais( termino: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/name/${ termino }`;
    return this.http.get<Country[]>( url, { params: this.httpParams } ); // regresa un observable de tipo Country(interface)
    // .pipe(
    //   catchError( err => of([])) // el of es una función que genera observables y transforma los que haya dentro de los paréntesis en el observable
    //   );
  }

  buscarCapital( termino: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/capital/${ termino }`;
    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }

  getPaisPorAlpha( id: string ): Observable<Country> {
    const url = `${ this.apiUrl }/alpha/${ id }`;
    return this.http.get<Country>( url );
  }

  buscarRegion( region: string ): Observable<Country[]> {

    const url = `${this.apiUrlRegiones}/regionalbloc/${ region }`;

    return this.http.get<Country[]>( url, { params: this.httpParams } ).pipe( tap( console.log ) )

  }
  
}
