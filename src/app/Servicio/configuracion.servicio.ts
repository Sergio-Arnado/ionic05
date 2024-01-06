import { Injectable } from '@angular/core';
import {Preferences} from '@capacitor/preferences'
import { key } from 'ionicons/icons';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService {

    private readonly KEY_ELIMINAR = "Permitir eliminar citas en el inicio"

    constructor() { }
  
    async deboEliminar (): Promise<boolean>{
      const resultado = await Preferences.get({key: ""})
      return resultado?.value == "true" ?? false
  
    }
  
    async setdeboEliminar(deboEliminar:boolean): Promise<void> {
      await Preferences.set({
        key: this.KEY_ELIMINAR,
        value: deboEliminar ? "true": "false"
      })
    }
  }
  