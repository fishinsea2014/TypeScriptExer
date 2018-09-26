import { Component } from '@angular/core';

interface author {
  name: string;
  id: number;
}

interface task {
  id: number;
  title: string;
}

const Tasks: task[] = [
  {id:1, title:'taks1'},
  {id:2, title:'taks2'},
  {id:3, title:'taks3'},
  {id:4, title:'taks4'},
  {id:5, title:'taks5'}
];

@Component({
  selector: 'app-root', //Referenced in index.html
  //templateUrl: './app.component.html', 
  template:`
    <h1>{{title}}</h1>
    <h3>{{msg}}</h3>
    <div>Author is {{author1.name}}</div>

    <div>
      <label>Please change the name of author</label>
      <input type="text" [(ngModel)]="author1.name"/>
    </div>

    <div>
      <ul>
        <li *ngFor='let list of lists' (click)="onChange(list.title)">{{list.id}} . {{list.title}}</li>
      </ul>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jason-exer-app';
  msg = 'Welcome to the website of Jason'
  author1: author = {
    name: 'Jason',
    id : 100
  }
  lists =  Tasks;

  onChange(title:string):void {
    this.msg += title;
  }
}
