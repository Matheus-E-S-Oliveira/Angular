import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponentComponent } from './components/new-component/new-component.component';
import { SignalsComponent } from './components/signals/signals.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NewComponentComponent,
    SignalsComponent
  ],
  template: `
  <h1>Curso de Angular</h1>
  <app-signals />
  `
})
export class AppComponent {

}
