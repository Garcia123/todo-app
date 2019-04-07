import { ToggleTodoAcction, EditarTodoAcction, BorrarTodoAcction } from './../todo.acctions';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styles: []
})
export class TodosItemComponent implements OnInit {
  @Input() todo:Todo;
  @ViewChild('txtInputFisico') txtInputFisico: ElementRef;

  chkField:FormControl;
  txtInput:FormControl;
  editando:boolean;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.chkField = new FormControl(this.todo.completado); 
    this.txtInput = new FormControl(this.todo.texto, Validators.required); 
    
    this.chkField.valueChanges.subscribe(valor => { 
      const acction = new ToggleTodoAcction(this.todo.id);
      this.store.dispatch(acction);
    });

  }

  editar() {
    this.editando = true;
    setTimeout(() => {this.txtInputFisico.nativeElement.select()}, 1);
  }

  terminarEdicion(){
    if(this.txtInput.invalid) return;
    if(this.txtInput.value == this.todo.texto) return;
    const acction = new EditarTodoAcction(this.todo.id, this.txtInput.value);
    this.store.dispatch(acction);
    this.editando = false;
  }

  borrarTodo(){
    const acction = new BorrarTodoAcction(this.todo.id);
    this.store.dispatch(acction);
  }

}
