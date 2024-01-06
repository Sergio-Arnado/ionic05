import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonInput, IonList, IonItem, IonButton, IonIcon, IonText } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addCircleOutline } from 'ionicons/icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-app-gestion',
  templateUrl: './app-gestion.component.html',
  styleUrls: ['./app-gestion.component.scss'],
  standalone: true,
  imports:[FormsModule, IonInput,IonList,IonItem, IonButton, IonIcon,CommonModule, IonText]
})
export class AppGestionComponent  implements OnInit {

  citas:string = ""
  @Output() onCreate = new EventEmitter<string>()
  citasValida: boolean = true;
  autores:string = ""
  @Output() onCreated = new EventEmitter<string>()
  autoresValido: boolean = true;
  constructor() {
    addIcons({
      addCircleOutline
    })
   }

  ngOnInit() {}

    onClick (){
      this.citasValida = this.citas.length >= 5;
      this.autoresValido = this.autores.length >= 2;

    if (this.citasValida && this.autoresValido) {
      this.onCreate.emit(this.citas);
      this.onCreate.emit(this.autores);
    } else {
     
      console.log('Error');
    }
    }
    
}