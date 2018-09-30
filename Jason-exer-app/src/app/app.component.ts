import { Component, ViewChild } from '@angular/core';

interface author {
  name: string;
  id: number;
}

const AUTHORS: author[] = [
  {id:1, name:'Jason'},
  {id:2, name:'Herry'},
  {id:3, name:'Hens'},
  {id:4, name:'Joy'},
  {id:5, name:'Emy'}
];

@Component({
  selector: 'app-root', //Referenced in index.html
  //templateUrl: './app.component.html', 
  template:`
    <app-purchase></app-purchase>
    <h1>List of the authors</h1>
    <ul class="authors">
      <li *ngFor="let author of authors"
          [ngClass]="{selected: author == selectedAuthor}"
          (click)="onChange(author)">
        <span class="badge">{{author.id}}</span> {{author.name}}
      </li>
    </ul>

    <div *ngIf="selectedAuthor">
      <h2>{{selectedAuthor.name}} details!</h2>
      <div><label>id: </label> {{selectedAuthor.id}}</div>
      <div>
        <label> name : </label>
        <input [(ngModel)]="selectedAuthor.name" placeholder="author name"/>
      </div>
    </div>
    <div>=====================</div>
    <h2>Number controled by child is: {{num}}</h2>
    <div>=====================</div>
    <div>=======This is Child Component of detail.component.ts==============</div>

    <div>===Refactor by setup a component of detail ==</div>

    <h3>The child title is: {{childTitle1}}</h3>
    <app-detail #childTitle [props]="selectedAuthor" (changeNumber)="numberChange($event)"></app-detail>
    <app-slider></app-slider>

  `,
  //styleUrls: ['./app.component.css']
  styles: [`
    .authors li.selected{
      background-color: #f60;
      color: #fff;
    }

    .authors {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding:0;
      width:15em;
    }

    .authors li {
      cursor:pointer;
      position: relative;
      left: 0;
      background-color:#EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius:4px;
    }

    .authors li:hover{
      left: .1em;
    }

    .authors .text {
      position: relative;
      top:-3px;
    }

    .authors .badge{
      display: inline-block;
      font-size: small;
      color:white;
      padding: 0.8em .7em 0 .7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})
export class AppComponent {
  title = 'Jason-exer-Author-List';
  authors= AUTHORS;
  selectedAuthor:author;
  num:number;
  childTitle1:string;
  onChange(author:author):void {
    this.selectedAuthor = author;
  }
  numberChange(i:number): void{
    this.num=i;
    console.log(this.num);
    //debugger;
  }

  @ViewChild('childTitle') childTitleA; //Another way to get the child properties
  ngOnInit(): void {
    this.childTitle1 = this.childTitleA.getTitle();
    //debugger;
  }
}
