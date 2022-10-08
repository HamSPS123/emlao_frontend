import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnDestroy,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';
import { BooleanInput } from '@angular/cdk/coercion';
import { Subject, takeUntil } from 'rxjs';
import { AccountService } from 'app/core/services/account.service';
import { User } from 'app/shared/interfaces/user.interface';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs: 'user',
})
export class UserComponent implements OnInit, OnDestroy {
    /* eslint-disable @typescript-eslint/naming-convention */
    static ngAcceptInputType_showAvatar: BooleanInput;
    /* eslint-enable @typescript-eslint/naming-convention */

    @Input() showAvatar: boolean = true;
    user: User;

    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _router: Router,
        private accountService: AccountService,
        private storage: LocalStorageService
    ) {}

    ngOnInit(): void {
        this.getUser();
    }

    getUser(): void {
        this.user = this.accountService.getUserLogin();
        this.storage.observe('USER').subscribe((value) => {
            this.user = value;
            this._changeDetectorRef.markForCheck();
        });
    }

    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    updateUserStatus(status: string): void {
        if (!this.user) {
            return;
        }
    }

    signOut(): void {
        this._router.navigate(['/sign-out']);
    }

    signUp(): void {
        this._router.navigate(['/sign-up']);
    }

    signIn(): void {
        this._router.navigate(['/sign-in']);
    }
}
