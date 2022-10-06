/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/member-ordering */
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DialogService {

    private state: BehaviorSubject<boolean> = new BehaviorSubject(false);
    readonly state$ = this.state.asObservable();

    constructor() { }

    show() {
        this.state.next(true);
    }

    hide() {
        this.state.next(false);
    }


}
