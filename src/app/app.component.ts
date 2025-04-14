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
  resultado = '0';

  Inserir(valor:string):void{
    //Valor inicial de resultado é 0, esse if serve para substituir o valor inicial pelo valor selecionado pelo usuario
    if (this.resultado == '0') {
      this.resultado = '';  
    }
    this.resultado += valor;
  }
  Limpar():void{
    this.resultado = "0";
  }
  BackSpace():void{
    this.resultado = this.resultado.slice(0, -1)//pega todos os caracteres da string, menos o ultimo
    if (this.resultado == '') {
      this.resultado = '0'
    }
  }
  Calcular(operacao:string):void{
    this.resultado = eval(operacao);
  }
  CalcularPotenciacao(valor:string):void{

  }
  CalcularRaizQuadrada(operacao:string):void{
    
  }
  Sen(valor:string):void{

  }
  Cos(valor:string):void{

  }
  Tan(valor:string):void{

  }
  NovosBotoes():void{
    let botaoEscondido = document.getElementsByClassName("botaoEscondido");
    
    //For para acessar todos os botoes com a classe botaoEscondido
    for(let i = 0; i < botaoEscondido.length; i++){
      let botao = botaoEscondido[i] as HTMLElement;
      const estiloBotao = window.getComputedStyle(botao).display;

      if (estiloBotao === "none") {
        botao.style.display = "block";
      }
      else{
        botao.style.display = "none";
      }
    }
  }
}
