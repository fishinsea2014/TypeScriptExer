import {Component} from '@angular/core';

@Component({
    selector:'app-router',
    
    //routerLink jump to target
    //router-outlet display the target
    template:`
        <div>====This is router exercise====</div>
        <div class="lists" >
            <a routerLink="/home" routerLinkActive="active">HOME</a>
            <a routerLink="/about" routerLinkActive="active">ABOUT</a>
            <a routerLink="/contact" routerLinkActive="active">CONTACT</a>
        </div>
        <div class="content">
            <router-outlet></router-outlet>
        </div>
        
        <div>====End of router exercise====</div>
    `,

    styles:[`
        .lists {
            padding: 10px 0 10px;
        }    

        .lists a {
            padding: 0 20px 0px;  
      
        }

        .active {
            color:#f60;
        }

        .content {
            padding: 20px 0 20px;
            background-color: gray;
            border: 1px;
        }
    
    `]
})

export class RouterComponent {

}