import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente',
  templateUrl: './componente.component.html',
  styleUrls: ['./componente.component.css'],
})
export class ComponenteComponent {
  fecha1 = new Date(1988, 3, 15); //15 de Abril del 1988

  idFormatoFecha = true; // true == shortDate ; false == fullDate
  get formatoFecha() {
    return this.idFormatoFecha ? 'shortDate' : 'fullDate';
  }
  cambiarFormatoFecha() {
    this.idFormatoFecha = !this.idFormatoFecha;
  }

  constructor() {}

  ngOnInit(): void {}
}
