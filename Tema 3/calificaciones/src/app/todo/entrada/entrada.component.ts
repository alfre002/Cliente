import { Component, OnInit } from '@angular/core';
import { NotasService } from '../notas.service';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {
  private _nombres: string = ''
  private _notas: string = ''

  constructor(private serviciosTareas: NotasService) { }

  ngOnInit(): void {
  }
  addAlumno(): void {
    if(this._nombres != null && this._notas != null) {
      this.serviciosTareas.nombres.push(this.nombre)
      this.serviciosTareas.notas.push(this.nota)
    }
  }
  get nombre(): string {
    return this._nombres
  }
  set nombre(nombres: string) {
    this._nombres = nombres
  }
  get nota(): string {
    return this._notas
  }
  set nota(notas: string) {
    this._notas = notas
  }
}
