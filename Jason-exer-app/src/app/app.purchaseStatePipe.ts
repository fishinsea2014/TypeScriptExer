import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'purchaseStatePipe'
})

export class PurchaseStatePipe implements PipeTransform {
    transform (value:boolean): string {
        switch (value) {
            case true:
                return 'Purchased';
            case false:
                return 'Purchasing';
            case true:
                return 'Purchasing';
        }
    }
}