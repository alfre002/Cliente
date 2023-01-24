import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotasService {
  private _nombres: string[] = []
  private _notas: string[] = []

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

  constructor() { }
}
