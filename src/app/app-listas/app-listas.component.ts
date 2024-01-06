import { Component, Input, OnInit } from '@angular/core';
import { Autor, Citas } from '../Modelo/citas';
import { CommonModule } from '@angular/common';
import { IonList, IonItem,IonLabel } from '@ionic/angular/standalone';
@Component({
  selector: 'app-app-listas',
  templateUrl: './app-listas.component.html',
  styleUrls: ['./app-listas.component.scss'],
  standalone: true,
  imports: [CommonModule,IonList, IonItem,IonLabel]
})
export class AppListaComponent  implements OnInit {

  @Input() cita:Citas [] = []
  @Input() autor:Autor [] = []

  constructor() { }

  ngOnInit() {}

}