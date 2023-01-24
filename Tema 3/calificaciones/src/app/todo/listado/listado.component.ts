import { Component, OnInit } from '@angular/core';
import { NotasService } from '../notas.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  private _nombres: string[] = []
  private _notas: string[] = []

  constructor(private servicioTareas: NotasService) { }

  public get nombres(): string[] {
    return this._nombres
  }

  public set nombres(value: string[]) {
    this._nombres = value
  }

  public get notas(): string[] {
    return this._notas
  }

  public set notas(value: string[]) {
    this._notas = value
  }

  ngOnInit(): void {
    this._nombres = this.servicioTareas.nombres
    this._notas = this.servicioTareas.notas
  }
/*   completada(alumnoInscrito: string): void {
    this._nombres = this.nombres.filter((nombre) => nombre !== alumnoInscrito)
    this._notas = this._notas.filter((nota) => nota !== alumnoInscrito)
  }
 */
}
