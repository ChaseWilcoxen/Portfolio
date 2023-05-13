import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockPriceComponent } from './components/nasdaq-score/nasdaq-score.component';
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherService } from './services/weather.service';
import { StockPriceService } from './services/nasdaq-score.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MovieApiService } from './services/movie-api.service';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/pages/about/about.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoService } from './services/todo.service';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { ClickableTableRowDirective } from './directives/clickable-table-row.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    AboutComponent,
    TodosComponent,
    TodoItemComponent,
    HeaderComponent,
    StockPriceComponent,
    WeatherComponent,
    HomeComponent,
    ClickableTableRowDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [WeatherService, StockPriceService, MovieApiService, TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
