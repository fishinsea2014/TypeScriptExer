import { Component,  Input,Output, EventEmitter} from '@angular/core';

interface Author {
    id: number;
    name: string;
}

@Component({
    selector:'app-detail',
    template: `
        <div *ngIf="Author">
            <h2>{{Author.name}} details!</h2>
            <div><label>id: </label> {{Author.id}}</div>
            <div>
                <label> name : </label>
                <input [(ngModel)]="Author.name" placeholder="author name"/>                
            </div>
            <div>
                <button (click)="parentChange()">Increase number in parent</button>
            </div>
        </div>
    `,
    inputs: ['Author:props'] //Second way to get parameter from parent.
})

export class DetailComponent {
    //@Input('props') Author:Author; //@input decorator use to transfer data from parent to children.
                                   // props is the parameter name of the parent, Author is alias of 
                                   // the props
    @Output() changeNumber: EventEmitter<number>= new EventEmitter();
    n:number = 0;
    parentChange(): void {
        
        this.changeNumber.emit(this.n++);
        //console.log(this.changeNumber, this.n);
    }

    title:string = 'Detail Child Component';
    getTitle():number {
        return this.n;
    }
}