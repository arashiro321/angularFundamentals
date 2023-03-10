import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-exemplo-servico2',
  templateUrl: './exemplo-servico2.component.html',
  styleUrls: ['./exemplo-servico2.component.css']
})
export class ExemploServico2Component {
  produto="";

    constructor(public logger:LoggerService){}


  adicionarProduto(){
    this.logger.logar(`O produto ${this.produto} foi adicionado.`);
  }

}
