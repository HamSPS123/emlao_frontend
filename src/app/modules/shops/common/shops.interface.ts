export interface Contact {
    address: string;
    email: string;
    tel: string;
    line: string;
    whatapp: string;
    website: string;
}

export interface Image {
    cover: string;
    profile: string;
}

export interface Shop {
    id: number;
    name: string;
    description: string;
    review: number;
    contact: Contact;
    image: Image;
}
