import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'main';
  resultado = "";

  Inserir(valor:string):void{
    this.resultado += valor;
  }
  Limpar():void{
    this.resultado = "";
  }
  BackSpace():void{
    this.resultado = this.resultado.slice(0, -1)//pega todos os caracteres da string, menos o ultimo
  }
  Calcular(operacao:string):void{
    this.resultado = eval(operacao);
  }
  NovosBotoes():void{

  }
}
