import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NewComponent } from '../../new-component/new-component.component';

@Component({
  selector: 'app-template-variables',
  standalone: true,
  imports: [NewComponent],
  templateUrl: './template-variables.component.html',
  styleUrl: './template-variables.component.scss'
})
//regatar valor pelo template ts
export class TemplateVariablesComponent implements AfterViewInit {
  // para pegar os dados do template variable
  @ViewChild('name') public nameInput!: ElementRef;

  // aceesar dados de um copenente
  @ViewChild(NewComponent) public childComponent!: NewComponent;

  //ciclo de vida do angular
  ngAfterViewInit() {
    console.log(this.nameInput.nativeElement.value);
    console.log(this.childComponent.name)
  }

}
