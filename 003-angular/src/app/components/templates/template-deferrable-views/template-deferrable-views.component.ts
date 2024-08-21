import { Component } from '@angular/core';
import { NewComponetsComponent } from "../../new-componets/new-componets.component";

@Component({
  selector: 'app-template-deferrable-views',
  standalone: true,
  imports: [NewComponetsComponent],
  templateUrl: './template-deferrable-views.component.html',
  styleUrl: './template-deferrable-views.component.scss'
})
export class TemplateDeferrableViewsComponent {

}
