import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon } from '@ionic/angular/standalone';
import { ServicioServicio } from '../Servicio/servicio.servicio';
import { Autor, Citas } from '../Modelo/citas';
import { CommonModule } from '@angular/common';
import { AppInicioComponent } from '../app-inicio/app-inicio.component';
import { AppGestionComponent } from '../app-gestion/app-gestion.component';
import { addIcons } from 'ionicons';
import { settingsOutline } from 'ionicons/icons'
import { RouterModule } from '@angular/router';
import { addCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [ AppGestionComponent, RouterModule, AppInicioComponent, IonHeader, IonToolbar, IonTitle, IonContent, CommonModule,  IonButtons, IonButton, IonIcon,  ],
}) 
export class HomePage implements OnInit{

    constructor() {addIcons({
      settingsOutline,
      addCircleOutline
    })
  }
  ngOnInit(): void {
   
  }
}