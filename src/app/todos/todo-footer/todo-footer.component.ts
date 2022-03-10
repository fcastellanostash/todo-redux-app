import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../../filtros/filtro.actions';
import { borrarCompletados } from '../todos.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtroActual : actions.filtrosPermitidos = 'todos';
  filtros : actions.filtrosPermitidos[] = ['todos', 'completados' , 'pendientes'];
  tareasPendientes : number = 0;

  constructor(private store : Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe( ({filtros,todos}) => {
      
      this.filtroActual = filtros;
      this.tareasPendientes = todos.filter(todo => !todo.completed).length;
    
    })
  }

  cambiarFiltro(filtro : actions.filtrosPermitidos){
    
    this.store.dispatch(actions.setFiltro({filtro}))
  }

  borrarCompletados(){
    this.store.dispatch(borrarCompletados())


  }

}
