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
  //[ngClass]="{showFlag:flag}" means that only apply the calss when 'flag' is true.
  template:`
    <h1 [ngClass]="{showFlag:flag}">Exer 1</h1>
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

    <div>
      <h3 *ngIf="flag" [ngClass]="{showFlag:'true'}">Flag is true.</h3>
      <button (click) = "changeFlag()" [style.color]='buttonColor' >Shift flag</button>
      <input type="text" [disabled]="flag" [(ngModel)]="flag" />
    </div>
  `,
  //styleUrls: ['./app.component.css']
  styles:[`
    .showFlag {
      background: #f60;
    }
  `]
})
export class AppComponent {
  title = 'Jason-exer-app';
  buttonColor="red";
  msg = 'Welcome to the website of Jason'
  author1: author = {
    name: 'Jason',
    id : 100
  }
  lists =  Tasks;
  flag:boolean = false;

  onChange(title:string):void {
    this.msg += title;
  }

  changeFlag():void{
    this.flag = !this.flag;
  }
}
