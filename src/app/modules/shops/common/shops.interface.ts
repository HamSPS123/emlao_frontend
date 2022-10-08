export interface Shop {
    bio:          string;
    _id:          string;
    account:      Account;
    name:         string;
    openingHours: string;
    docModel:     string;
    createdAt:    Date;
    updatedAt:    Date;
    isActive:     boolean;
    contact:      Contact;
    images:       Images;
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

export interface Contact {
    whatApp: string;
    address: string;
    email:   string;
    tel:     string;
    line:    string;
    whatapp: string;
    website: string;
}

export interface Images {
    profilePhoto: string;
    coverPhoto:   string;
}
