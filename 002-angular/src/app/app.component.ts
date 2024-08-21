import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { NewComponentComponent } from './components/new-component/new-component.component';
import { TemplateControlFlowComponent } from './components/template/template-control-flow/template-control-flow.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TemplateVariablesComponent,
    TemplateBindingComponent,
    NewComponentComponent,
    TemplateControlFlowComponent,
  ],
  template:`
    <router-outlet/>
  <h1>Curso de Angular</h1>
  <app-template-control-flow />

    `
})
export class AppComponent {
  
}
