import { Injectable } from "@angular/core";
import { CanDeactivateFn } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class preventExit {
    formSubmitted: boolean = false;
    canDeactivate: CanDeactivateFn<boolean> = () => {
        if(!this.formSubmitted) {
            alert('please submit the form')
        }
        return this.formSubmitted;
    }
}