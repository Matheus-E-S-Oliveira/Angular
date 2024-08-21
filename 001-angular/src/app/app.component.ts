import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//Components
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewComponent,TemplateBindingComponent,TemplateVariablesComponent],
  styles: [`
      h1{
      color: blue}
    `],
  template: 
  `<router-outlet/>
  <h1>Curso de Angular</h1>
  <app-template-variables />
  <hr />
  <app-template-binding />
  <hr />
  Forma antiga de chamar componentes: <app-new-component></app-new-component>
  <hr />
  Forma nova de chamar componetes: <app-new-component/>
  <hr />
  <div class= "theme-dark">
    <app-new-component />
  </div>
  <h4>Ordem de prioridade do style e o decorator do componente,
  segido pelo style do componenete e por ultimo o style goblal</h4>
 

  `,
  
})
export class AppComponent {

}
