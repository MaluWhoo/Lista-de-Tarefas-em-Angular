import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ListaService {
  constructor() { }

  tarefas = [
    { descricao: 'Estudar Angular', concluida: false },
    { descricao: 'Fazer exercício de programação', concluida: false },
    { descricao: 'Revisar conteúdo da aula', concluida: false }
  ]

  marcarComoConcluida(tarefa: any) {
    console.log("Tarefa concluída:", tarefa.descricao);
    tarefa.concluida = !tarefa.concluida;
  }

  // novaTarefa = '';
  adicionarTarefa(descricao: string) {
    this.tarefas.push({ descricao: descricao, concluida: false });
    // this.novaTarefa = '';
  }

  removerTarefa(tarefa: any) {
    const index = this.tarefas.indexOf(tarefa);

    if (index > -1) {
      this.tarefas.splice(index, 1);
    }
  }
}
