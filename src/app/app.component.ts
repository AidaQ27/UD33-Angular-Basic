import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Creem les varaibles
  title = 'UD34-Calculadora';
  pantalla: any  = "";
  num1 = 0;
  num2 = 0;
  operador = "";
  resultat: any = 0;
  resultat2: any = 0;

  contador = 0;
  operacioTotal: any = 0;
  pantalla2: any = "";

// Afegir numero a la pantalla
  printNumber(num: number) {
    this.pantalla += "" + num;

  }

  printDoble(num1: number, num2: number) {
    this.pantalla += "" + num1 + num2;
  }

  printPunt(punt: string) {
    if (this.contador < 1)
      this.pantalla += "" + punt;
      this.contador ++;
  }

  delete() {
    this.pantalla = "";
    this.pantalla2 = 0;
    this.num1 = 0;
    this.num2 = 0;
    this.resultat = 0;
    this.contador = 0;

  }

  suma(){
    this.operador = "+";
    this.num1 = this.pantalla;  //Modificada la variable pantalla a any, para recoger el valor
    this.pantalla = "";
    this.contador = 0;
  }

  resta(){
    this.operador = "-";
    this.num1 = this.pantalla;  //Modificada la variable pantalla a any, para recoger el valor
    this.pantalla = "";
    this.contador = 0;
  }

  multi(){
    this.operador = "*";
    this.num1 = this.pantalla;  //Modificada la variable pantalla a any, para recoger el valor
    this.pantalla = "";
    this.contador = 0;

  }

  div() {
    this.operador = "/";
    this.num1 = this.pantalla;  //Modificada la variable pantalla a any, para recoger el valor
    this.pantalla = "";
    this.contador = 0;

  }


  igual() {
    this.num2 = this.pantalla;
    this.resultat = eval(this.num1 + this.operador + this.num2);
    this.pantalla = this.resultat;
    this.resultat2 = (this.num1 + this.operador + this.num2);
    this.pantalla2 = this.resultat2;

  }
  // Reiniciar operadores a contador= 0
}

