import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Creem les varaibles
  title = 'UD34-Calculadora';
  pantalla = "";
  num1 = 0;
  num2 = 0;
  operador = "";
  resultat = 0;
  contador = 0;

// Afegir numero a la pantalla
  printNumber(num: number) {
    this.pantalla += "" + num;

  }

  printPunt(punt: string) {
    if (this.contador < 1)
      this.pantalla += "" + punt;
      this.contador ++;
  }

  delete() {
    this.pantalla = "";
    this.num1 = 0;
    this.num2 = 0;
    this.resultat = 0;
    this.contador = 0;

  }


  // Reiniciar operadores a contador= 0
}
