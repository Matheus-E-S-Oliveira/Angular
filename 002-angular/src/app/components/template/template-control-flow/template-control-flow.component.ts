import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-template-control-flow',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './template-control-flow.component.html',
  styleUrl: './template-control-flow.component.scss'
})
export class TemplateControlFlowComponent {
 public isTrue = true;
 public switchCondition = "A";

 public itens: Array <{ name: string }> = [];
 public loadingData$: Observable<string[]> = of([
  "item 1",
  "item 2",
  "item 3",
 ]).pipe(delay(3000));

 public trackByFn(index: number){
  return index
 }
 //pegando valor do html e salvando num array
 public addNewName(value: string){
  return this.itens.push({ name: value});
 }
}
