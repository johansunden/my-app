export interface ISignInRequest {
}

export interface IPasswordSignInRequest extends ISignInRequest {
    username: string;
    password: string;
}

export class SignInRequest implements ISignInRequest {

    protected _discriminator: string;

    constructor(data?: ISignInRequest) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
        this._discriminator = "SignInRequest";
    }
}

export class PasswordSignInRequest extends SignInRequest implements IPasswordSignInRequest {
    username!: string;
    password!: string;

    constructor(data?: IPasswordSignInRequest) {
        super(data);
        this._discriminator = "PasswordSignInRequest";
    }
}