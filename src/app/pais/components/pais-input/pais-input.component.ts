import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter   : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';

  deBouncer: Subject<string> = new Subject();; // el Subject es un observable

  termino: string = '';

  ngOnInit(): void {
    // debounceTime -> no se emitirá el subscribe hasta que se deje de emitir un valor durante unos 300 milisegundos
    this.deBouncer
        .pipe( debounceTime ( 300 ) )
        .subscribe( valor => {
        this.onDebounce.emit( valor ); // también se podría utilizar el término
    })
  }

  buscar() {
    this.onEnter.emit( this.termino );
  }

  teclaPresionada() {
    // conectamos el deBouncer y cada vez que alguien presione una tecla llamamos al next que llama al siguiente valor que es el término
    // el next está suscrito  en el ngOnInit que llama al valor
    this.deBouncer.next( this.termino );
  }

}
