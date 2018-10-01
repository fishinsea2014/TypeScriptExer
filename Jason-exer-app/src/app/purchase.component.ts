import {Component} from '@angular/core';
import { Article } from './service/article.interface';
import { ArticleService} from './app.articles.service';

// interface Artical {
//     state: boolean;
//     name: string;
// }

// const ARTICALS: Artical[]= [
//     {state: true, name:'Memory'},
//     {state: false, name:'Speaker'},
//     {state: false, name:'Screen'}
// ];



@Component({
    selector:'app-purchase',
    template:`
        <div>===This is Purchasing List Module====</div>
        <div>
            <div>
                <input type="text" [(ngModel)]="newItem"/>
                <button (click)="addNewItem()">Add A New Item</button>
                <input type="checkbox" [(ngModel)]="allChecked" (change)="checkAll()"/>Check All States
            </div>
            <table>
                <thead>
                  <tr>
                    <th>NO.</th>
                    <th>Name</th>
                    <th>State</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                    <tr *ngFor="let item of items, let i=index" [ngClass]="{colored:i%2==0}">
                        <td>{{i+1}}</td>
                        <td>{{item.name}}</td>
                        <td><input type="checkbox" [(ngModel)]="item.state" (change)="isAllChecked()"/>{{item.state | purchaseStatePipe}}</td>
                        <td><button (click)="delAItem(i)">Del</button></td>
                    
                    </tr>
                </tbody>

            </table>
        </div>
    `,
    styles: [`
        .colored {
            background: #f9f9f9;
            color: #f60;
        }

        table {
            width: 80%;
        }

        td tr th {
            text-align: center;
        }
    `
    ],

    //Add data source from service
    providers:[ArticleService]
    

})

export class PurchaseComponent {
    
    //Inject the dependency in construction method
    constructor(public ArticleService: ArticleService){}


    newItem: string ="item";
    //items = ARTICALS;
    items: Article[];
    //Get articles from ArticleService
    getData() {
        this.ArticleService.getListPre()
            .then(articles => {
                this.items = articles;
            })
    }

    //Retrive articles when initiating the component
    ngOnInit(): void {
        this.getData();
    }

    //Select all
    allChecked = false;
    checkAll(){
        console.log("check all");
        this.items.forEach((item, index) =>{
            item.state = this.allChecked;
        })
    }


    addNewItem():void {
        if(this.newItem=='') return;
        this.items.unshift({name:this.newItem, state:false});
        this.newItem = '';
    }

    delAItem(index:number):void{
        this.items.splice(index,1);
    }

    isAllChecked() :void {
        let checkedItems = this.items.filter((item) => {
            return item.state == true;
        })
        // if (this.items.length == checkedItems.length) this.allChecked=true
        // else this.allChecked = false;
        this.items.length == checkedItems.length ? this.allChecked=true : this.allChecked = false;
    }
}    