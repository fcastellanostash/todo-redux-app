import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../todos.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input('todo') todo! : Todo;
  @ViewChild('txtInputEdit') txtInputEdit! : ElementRef;
  chkCompletado! : FormControl;
  txtInput! : FormControl;

  editando : boolean = false;

  constructor(private store : Store<AppState>) {}

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    this.chkCompletado.valueChanges.subscribe(
      valor => {
          
        //aca hay que hacer el toggle
        this.store.dispatch(actions.toggle({id : this.todo.id}))
        console.log(valor);
      }
    )

  }

  editar(){

    this.editando = true;
    this.txtInput.setValue(this.todo.texto);
    setTimeout(()=>{
      this.txtInputEdit.nativeElement.select();

    },1)
  }

  terminarEdicion(){
    this.editando = false;

    if (this.txtInput.invalid) return
    if (this.txtInput.value === this.todo.texto) return

    this.store.dispatch(actions.editar({
      id: this.todo.id,
      texto :  this.txtInput.value
    }));
  }

  borrar(){

    this.store.dispatch(actions.borrar({id:this.todo.id}));
  }

}
