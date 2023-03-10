import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-exemplos-servicos1',
  templateUrl: './exemplos-servicos1.component.html',
  styleUrls: ['./exemplos-servicos1.component.css']
})
export class ExemplosServicos1Component {
  nome="";

  constructor(private logger: LoggerService){}

  adicionarNome(){
    this.logger.logar(`O nome ${this.nome} foi adicionado.`);
  }

}
