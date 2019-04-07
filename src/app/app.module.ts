import { environment } from './../environments/environment.prod';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import redux 
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppReducers } from './app.reducers';

//forms
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooderComponent } from './fooder/fooder.component';
import { TodoComponent } from './todo/todo.component';
import { TodosListComponent } from './todo/todos-list/todos-list.component';
import { TodosItemComponent } from './todo/todos-item/todos-item.component';
import { TodoFooterComponent } from './todo/todo-footer/todo-footer.component';
import { TodoAddComponent } from './todo/todo-add/todo-add.component';
import { FilterPipe } from './filter/filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    FooderComponent,
    TodoComponent,
    TodosListComponent,
    TodosItemComponent,
    TodoFooterComponent,
    TodoAddComponent,
    FilterPipe
  ],
  imports: [
    StoreModule.forRoot(AppReducers),
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
