import { filtrosValidos } from './filter.acction';
import { Todo } from './../todo/model/todo.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos:Array<Todo>, filtro:filtrosValidos): Array<Todo> {
    switch(filtro){
      case "completados":
        return todos.filter(todo => todo.completado);
      case "pendientes":
        return todos.filter(todo => !todo.completado);
      default:
        todos;
    }
    return todos;
  }

}
