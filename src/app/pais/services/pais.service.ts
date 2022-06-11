import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
// import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  // https://restcountries.com/v2/regionalbloc/{regionalbloc}

  constructor( private http: HttpClient ) { }

  buscarPais( termino: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/name/${ termino }`;
    return this.http.get<Country[]>( url ); // regresa un observable de tipo Country(interface)
    // .pipe(
    //   catchError( err => of([])) // el of es una función que genera observables y transforma los que haya dentro de los paréntesis en el observable
    //   );
  }

  buscarCapital( termino: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/capital/${ termino }`;
    return this.http.get<Country[]>( url );
  }

  getPaisPorAlpha( id: string ): Observable<Country> {
    const url = `${ this.apiUrl }/alpha/${ id }`;
    return this.http.get<Country>( url );
  }

  buscarRegion( region: string ): Observable<Country[]> {
    const url = `https://restcountries.com/v2/regionalbloc/${ region }`;
    return this.http.get<Country[]>( url );
  }
  
}
