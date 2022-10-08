export interface User {
    _id:       string;
    account:   Account;
    name:      string;
    docModel:  string;
    createdAt: Date;
    updatedAt: Date;
    isActive:  boolean;
    images:    Images;
}

export interface Account {
    _id:       string;
    accountNo: string;
    pin:       string;
    username:  string;
    role:      Role;
}

export interface Role {
    code: string;
    name: string;
}

export interface Images {
    profilePhoto: string;
    coverPhoto:   string;
}
