import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [NgClass,NgStyle,FormsModule],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name = "Daner Troquatte";
  public age = 30;
  public isDisabled = true;
//este tipo de validação não funciona na nova versão ele fica com estatica
//com signal este tipo de validação
  public isTextDecoration = this.age === 32 ? "underline" : "none";

  public sum(){
    return this.age++;
  }
  public sub(){
    return this.age--;
  }
  public onKeyDown(event: Event){
    return console.log(event)
  }
  public onMouseMove(event: MouseEvent){
    // pegando parte especifica do MauseEvent
    return console.log({
      clientx: event.clientX,
      clienty: event.clientY,
    });
  }

}
