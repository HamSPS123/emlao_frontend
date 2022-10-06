/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertType } from '@fuse/components/alert';
import {
    RxwebValidators,
    ReactiveFormConfig,
} from '@rxweb/reactive-form-validators';
import { UtilsService } from 'app/shared/services/utils.service';
import { AuthService } from '../common/auth.service';
import { SignInModel } from '../common/sign-in.model';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
})
export class SignInComponent implements OnInit {
    formGroup: UntypedFormGroup;
    submitted: boolean = false;

    alert: { type: FuseAlertType; message: string } = {
        type: 'success',
        message: '',
    };
    showAlert: boolean = false;

    constructor(
        private fb: UntypedFormBuilder,
        private utilsService: UtilsService,
        private authService: AuthService
    ) {
        ReactiveFormConfig.set(this.utilsService.validationMessages);
    }

    get controls() {
        return this.formGroup.controls;
    }

    ngOnInit(): void {
        this.initForm();
    }

    initForm() {
        const rxweb = RxwebValidators;
        this.formGroup = this.fb.group({
            username: ['', [rxweb.required(), rxweb.email()]],
            password: ['', [rxweb.required(), rxweb.minLength({ value: 6 })]],
        });
    }

    signIn() {
        this.submitted = true;

        if (this.formGroup.invalid) {
            return;
        }

        const formData = this.formGroup.value;

        this.authService.signIn(formData).subscribe({
            next: (token) => {
                if (token) {
                    console.log(token);
                }
            },
            error: (error) => {
                const errorMessage = error.error.message;
                this.showAlert = true;

                this.alert = {
                    type: 'warn',
                    message: errorMessage,
                };
            },
        });
    }
}
