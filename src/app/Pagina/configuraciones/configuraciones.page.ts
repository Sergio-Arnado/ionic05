import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToggleChangeEventDetail } from '@ionic/angular';
import { IonToggleCustomEvent } from '@ionic/core';
import { ConfiguracionService } from 'src/app/Servicio/configuracion.servicio';

@Component({
  selector: 'app-configuraciones',
  templateUrl: './configuraciones.page.html',
  styleUrls: ['./configuraciones.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ]
})
export class ConfiguracionesPage implements OnInit {


deboEliminar: boolean = true;

  constructor(
    private configuracionService:ConfiguracionService
  ) { }

  async ngOnInit() {
    this.deboEliminar = await this.configuracionService.deboEliminar()
  }

  ionChange($event: IonToggleCustomEvent<ToggleChangeEventDetail<any>>) {
      this.configuracionService.setdeboEliminar(this.deboEliminar)
  }

}