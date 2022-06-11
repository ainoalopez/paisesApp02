import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
        margin-right: 5px;
    }`
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['Africa', 'America', 'Asia', 'Europa', 'Oceania'];
  regionActiva: string = '';

  constructor() { }

  activarRegion( region: string ) {
    this.regionActiva = region;

    // TODO: hacer el llamado al esrvicio
  }

}
