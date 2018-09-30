import {Component} from '@angular/core';

const Imgs: string[] =[
    '../assets/imgs/banner1.jpg',
    '../assets/imgs/banner2.jpg',
    '../assets/imgs/banner3.jpg'
]

@Component({
    selector:'app-slider',
    template:`
        <h3>====Here is Sloder Component====</h3>
        <div class="index-content">
            <div class="banner">
                <div *ngFor="let img of ImgList, let i=index">
                    <img [src]="img" *ngIf="i==curIndex" />
                </div>

                <div class="banner-circle">
                    <ul>
                        <li *ngFor="let list of ImgList, let i=index" 
                            [ngClass]="{selected:i == curIndex}">
                        X</li>
                    </ul>
                </div>
            </div>
        </div>
    `,

    styles:[`
        .index-content .banner {
            position:ralative;
        }

        .index-content .banner .banner-circle {
            position: absolute;
            bottom: 5px;
            leftL: 0;
            right: 0;
            color: #fff;
        }

        .index-content .banner .banner-circle li{
            display:inline-block;
            background: rgba(0,255,0,.3);
            border-radius: 50%;
            padding:5px;
            margin:2px;
        }
        .index-content .banner .banner-circle ul {
            text-align: center;
        }
        .index-content .banner .banner-circle .selected {
            background: rgba(255,0,0,.8);
        }
        .index-content .banner img {
            width: 100%;
            margin: 0;
            padding: 0;
        }
    `]
})

export class SliderComponent {
    ImgList = Imgs;
    curIndex:number =0;
    ngOnInit():void{
        this.play();
    }

    play(): void{
        setInterval(() => {this.autoPlay()},2000)
    }

    autoPlay():void{
        this.curIndex++;
        if (this.curIndex == this.ImgList.length){
            this.curIndex = 0;
        }
    }
}