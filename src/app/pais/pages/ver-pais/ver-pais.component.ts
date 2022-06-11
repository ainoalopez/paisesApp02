import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from "rxjs/operators";
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country; // puede ser que país sea nulo

  constructor( 
    private activetedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {} // para suscribirnos a cualquier cambio del url

  ngOnInit(): void {
    // obtenemos el id del pais
    this.activetedRoute.params
      .pipe(
        switchMap( ({ id }) => this.paisService.getPaisPorAlpha( id ) ),
        tap( console.log ) )
      .subscribe( pais => this.pais = pais[0]); // debe ser igual a un arreglo
  }
}
