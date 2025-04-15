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
      //Substitui o espaço vazio por 0
      this.resultado = '0';
    }
  }
  Calcular(operacao:string):void{
    this.resultado = eval(operacao);
  }
  CalcularRaizQuadrada(valor:string):void{
    //Calcula raiz quadrada usando o metodo Math.sqrt
    let valorConvertido = parseFloat(valor);
    let valorFinal = Math.sqrt(valorConvertido).toString();
    this.resultado = valorFinal;
  }
  CalcularLogaritmo(valor:string):void{
    //Calcula log10 (Logaritmo) usando o metodo Math.log10
    let valorConvertido = parseFloat(valor);
    let valorFinal = Math.log10(valorConvertido).toString();
    this.resultado = valorFinal;
  }
  Sen(valor:string):void{
    //Converte o valor para float e atribui a uma nova variavel
    let valorConvertido = parseFloat(valor);
    //Para calcular o seno, primeiro deve converter o valor para radiano
    let valorRadiano = valorConvertido * (Math.PI / 180);
    //Calcula o valor do seno usando Math.sin() e depois converte para string
    let valorFinal = Math.sin(valorRadiano).toString();
    //Manda o resultado para variavel resultado
    this.resultado = valorFinal;
  }
  Cos(valor:string):void{
    //Converte o valor para float e atribui a uma nova variavel
    let valorConvertido = parseFloat(valor);
    //Para calcular o cosseno, primeiro deve converter o valor para radiano
    let valorRadiano = valorConvertido * (Math.PI / 180);
    //Calcula o valor do seno usando Math.cos() e depois converte para string
    let valorFinal = Math.cos(valorRadiano).toString();
    //Manda o resultado para variavel resultado
    this.resultado = valorFinal;
  }
  Tan(valor:string):void{
    //Converte o valor para float e atribui a uma nova variavel
    let valorConvertido = parseFloat(valor);
    //Para calcular o seno, primeiro deve converter o valor para radiano
    let valorRadiano = valorConvertido * (Math.PI / 180);
    //Calcula o valor do tangente usando Math.tan() e depois converte para string
    let valorFinal = Math.tan(valorRadiano).toString();
    //Manda o resultado para variavel resultado
    this.resultado = valorFinal;
  }
  NovosBotoes():void{
    //Esse metodo serve para mostrar/esconder os botoes extras da calculadora
    let botaoEscondido = document.getElementsByClassName("botaoEscondido");
    //getElementsByClassName acessa todos os valores com a classe botaoEscondido
    //For para acessar todos os botoes com a classe botaoEscondido 
    for(let i = 0; i < botaoEscondido.length; i++){
      //Acesso o botao desejado como um elemento html usando "as HTMLElement" e atribuo a variavel botao
      let botao = botaoEscondido[i] as HTMLElement;
      //Acesso o estilo do botao atraves do "window.getComputedStyle"
      const estiloBotao = window.getComputedStyle(botao).display;
      //Logica para mostrar ou esconder o botão
      if (estiloBotao === "none") {
        botao.style.display = "block";
      }
      else{
        botao.style.display = "none";
      }
    }
  }
}
