import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = "Danilo";
  dataNascimento = "1995-03-01";
  urlImagem ="./assets/closeup-beautiful-green-leaves.jpg";
  
  mostrarDatadeNascimento(){
    alert(`A data de nascimento da folha é: ${this.dataNascimento}`)
  }

}
