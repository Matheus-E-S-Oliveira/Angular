import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//Components
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template-binding/template-binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewComponent,TemplateBindingComponent],
  styles: [`
      h1{
      color: blue}
    `],
  template: 
  `<router-outlet/>
  <h1>Curso de Angular</h1>
  <app-template-binding />
  Forma antiga de chamar componentes: <app-new-component></app-new-component>
  Forma nova de chamar componetes: <app-new-component/>
  <div class= "theme-dark">
    <app-new-component />
  </div>
  <h4>Ordem de prioridade do style e o decorator do componente,
  segido pelo style do componenete e por ultimo o style goblal</h4>
  
  `,
  
})
export class AppComponent {

}
