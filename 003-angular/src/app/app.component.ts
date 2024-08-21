import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateBindingComponent } from './components/templates/template-binding/template-binding.component';
import { TemplateVariablesComponent } from './components/templates/template-variables/template-variables.component';
import { TemplateDeferrableViewsComponent } from './components/templates/template-deferrable-views/template-deferrable-views.component';
import { NewComponetsComponent } from './components/new-componets/new-componets.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NewComponetsComponent,
    TemplateBindingComponent,
    TemplateVariablesComponent,
    TemplateDeferrableViewsComponent
  ],
  template:`
  <h1>Curso de Angular</h1>
  <app-template-deferrable-views />
  `
})
export class AppComponent {
}
