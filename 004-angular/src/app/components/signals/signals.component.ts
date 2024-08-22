import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
  public firstName = signal("Daner ");
  public lastName = signal("Tronquatte");

  public fullName = computed(()=>{
    this.firstName() + this.lastName();
  });

  public array = signal([1]);
// effect e baseado no signal, tem comportamentos de acordo com o signal
// raramente utilizado, mas uteis em situaçãoes especificas
// eles são Registro de dados sendo exibidos e quando eles mudam, seja para analise ou como ferramenta den depuração
//manter dados sincronizados com  o window.localStorege
//Adiconar comportamento DOM personalizado que não pode ser expresso com sintaxe de modela
//Executar renderização personalizada em um <canvas>, bibiotleca d egráficos ou outra biblioteca de Ui de terceiros
//so vai aparecer dados se o signal tiver cadastrado dentro do effect
//não muda signal quando e o mesmo o valor
//atualiza os dados apenas quando a atualizão no signal
  constructor( ) {
    effect(()=>{
      console.log(this.firstName())
      console.log(this.array());
    })
  }
  public updateName() {
    return this.firstName.set("João");
  }
  public updateArray() {
    this.array.update((oldValue: Array<number>)=>{
      console.log(oldValue)
      return [...oldValue, oldValue.length + 1];
    })
  }
}
