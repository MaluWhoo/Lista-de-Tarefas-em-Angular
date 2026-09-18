import { Component, signal } from '@angular/core';
import { ItemTarefaComponent } from './component/item-tarefa/item-tarefa';
import { CommonModule } from '@angular/common';

@Component({
  imports: [ ItemTarefaComponent, CommonModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('lista-de-tarefas');
}
