import { Component, OnInit } from '@angular/core';
import { AppGestionComponent } from '../app-gestion/app-gestion.component';
import { AppListaComponent } from '../app-listas/app-listas.component';
import { ServicioServicio } from '../Servicio/servicio.servicio';
import { Autor, Citas } from '../Modelo/citas';
import { ConfiguracionService } from '../Servicio/configuracion.servicio';

@Component({
  selector: 'app-app-inicio',
  templateUrl: './app-inicio.component.html',
  styleUrls: ['./app-inicio.component.scss'],
  standalone: true,
  imports: [AppGestionComponent,AppListaComponent]
})
export class AppInicioComponent  implements OnInit {


  Listacita:Citas [] = []
  Listaautor:Autor[] = []

  constructor(
    private serviceService:ServicioServicio
  ) { }

  async ngOnInit() {
    await this.serviceService.iniciarPlugin()
    await this._actualizar()
  }

  async _actualizar(){
    this.Listacita = await this.serviceService.getCita()
    this.Listaautor = this.serviceService.getAutor()
  }

  async onCreateCitas($event: string) {
    const cita:Citas = {Cita: $event}
    await this.serviceService.agregarCita(cita)
    await this._actualizar
  }
  onCreatedAutores($event: string){
    const autor = new Autor ($event)
    this.serviceService.agregarAutor(autor)
  }
}
