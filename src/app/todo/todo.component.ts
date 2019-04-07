import { AppState } from 'src/app/app.reducers';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToggleAllTodoAcction } from './todo.acctions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  completado:boolean = false;

  constructor(private store:Store<AppState>) { }

  ngOnInit() {
  }

  toggleAll(){
    this.completado = !this.completado;
    //console.log(this.completado);
    const acction = new ToggleAllTodoAcction(this.completado);
    this.store.dispatch(acction);

  }

}
