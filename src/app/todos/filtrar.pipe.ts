import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo.model';
import { filtrosPermitidos } from '../filtros/filtro.actions';

@Pipe({
  name: 'filtrar'
})
export class FiltrarPipe implements PipeTransform {

  transform(todos: Todo[], filtro? : filtrosPermitidos): Todo[] {
   
    switch (filtro) {
      case 'completados':
        return todos.filter( todo => todo.completed);
      case 'pendientes':
        return todos.filter( todo => !todo.completed);
      default:
      return todos;
      }



  }

}
