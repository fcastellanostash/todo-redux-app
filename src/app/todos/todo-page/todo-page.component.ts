import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../todos.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  completados : boolean = false;
  constructor(private store : Store<AppState>) {
  }

  ngOnInit(): void {
  }

  toggleAll(){
    this.completados = !this.completados
    console.log(this.completados);
    this.store.dispatch(actions.toggleAll({completed:this.completados}))
  }

}
