import { Injectable } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class NotasService {
  private _alumnos: any[] = []

  public get alumnos(): any[] {
    return this._alumnos
  }
  public set alumnos(value: any[]) {
    this._alumnos = value
  }

  constructor() { }
}
