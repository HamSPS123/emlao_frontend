/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';
import { FuseAlertType } from '@fuse/components/alert';
import { ReactiveFormConfig, RxwebValidators } from '@rxweb/reactive-form-validators';
import { AccountService } from 'app/core/services/account.service';
import { JwtService } from 'app/core/services/jwt.service';
import { UtilsService } from 'app/shared/services/utils.service';
import { AuthService } from '../../common/auth.service';

@Component({
    selector: 'app-admin-sign-in',
    templateUrl: './admin-sign-in.component.html',
    styleUrls: ['./admin-sign-in.component.scss'],
})
export class AdminSignInComponent implements OnInit {
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
        private authService: AuthService,
        private jwtService: JwtService,
        private accountService: AccountService
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
            next: (response) => {
                if (response) {
                    const token = response.accessToken;
                    this.jwtService.setToken(token);
                    this.accountService.getProfile();
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
