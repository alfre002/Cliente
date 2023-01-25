import { Component, OnInit } from '@angular/core';
import { NotasService } from '../notas.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  private _alumnos: string[] = []

  constructor(private servicioTareas: NotasService) { }

  public get alumnos(): string[] {
    return this._alumnos
  }
  public set alumnos(value: string[]) {
    this._alumnos = value
  }

  ngOnInit(): void {
    this._alumnos = this.servicioTareas.alumnos
  }
/*   completada(alumnoInscrito: string): void {
    this._nombres = this.nombres.filter((nombre) => nombre !== alumnoInscrito)
    this._notas = this._notas.filter((nota) => nota !== alumnoInscrito)
  }
 */
}
