import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ListaService } from '../../services/lista.service';
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';
import { MatProgressBar } from '@angular/material/progress-bar';

@Component({
  imports: [CommonModule, ReactiveFormsModule, CdkDropList, CdkDrag, MatProgressBar],
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
}
