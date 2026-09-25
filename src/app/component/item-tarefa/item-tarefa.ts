import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ListaService } from '../../services/lista.service';
import {CdkDrag, CdkDragDrop, CdkDropList, DragDropModule, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  imports: [CommonModule, ReactiveFormsModule, CdkDropList, CdkDrag, DragDropModule],
  selector: 'app-item-tarefa',
  styleUrl: './item-tarefa.css',
  templateUrl: './item-tarefa.html',
})
export class ItemTarefaComponent {
  constructor(public ListaService: ListaService) { }

  formItem = new FormGroup({
    descricao: new FormControl('', Validators.required)
  }); 

  enviar(){
    if (this.formItem.valid){
      this.ListaService.adicionarTarefa(
        this.formItem.value.descricao!
      );
      this.formItem.reset({ descricao: '' });
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.ListaService.tarefas, event.previousIndex, event.currentIndex);
  }

  get totalTarefas(): number {
    return this.ListaService.tarefas.length;
  }

  get tarefasConcluidas(): number {
    return this.ListaService.tarefas.filter(t => t.concluida).length;
  }

  get percentualProgresso(): number {
    return this.totalTarefas > 0 ? (this.tarefasConcluidas / this.totalTarefas) * 100 : 0;
  }

  get todasConcluidas(): boolean {
    return this.totalTarefas > 0 && this.tarefasConcluidas === this.totalTarefas;
  }

  get progressLabel(): string {
    if (this.tarefasConcluidas === 0) return 'Nenhuma tarefa concluída';
    if (this.todasConcluidas) return 'Todas concluídas — ótimo trabalho!';
    return `${this.tarefasConcluidas} de ${this.totalTarefas} concluída${this.tarefasConcluidas !== 1 ? 's' : ''}`;
  }

  corProgresso(): string {
    const pct = this.percentualProgresso;
    if (pct >= 100) return '#6DBF94';
    if (pct >= 60) return '#8DC8A6';
    if (pct >= 30) return '#E6B46B';
    return '#E68865';
  }
}
