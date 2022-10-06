import {
    required,
    minLength,
    email,
} from '@rxweb/reactive-form-validators';
export class SignInModel {
    @required()
    @email()
    username: string;

    @required()
    @minLength({ value: 6 })
    password: string;
}
