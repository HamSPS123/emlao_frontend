/* eslint-disable arrow-parens */
/* eslint-disable quotes */
/* eslint-disable @angular-eslint/use-lifecycle-interface */
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-manages',
    templateUrl: './manages.component.html',
    styleUrls: ['./manages.component.scss'],
})
export class ManagesComponent implements OnInit {
    menuItems: any[] = [
        {
            id: 'users',
            title: 'ພະນັກງານ',
            icon: 'heroicons_solid:user-circle',
            link: 'users',
        },
        {
            id: 'users',
            title: 'ສິນຄ້າ',
            icon: '',
            link: '',
        },
    ];
    constructor() {}

    ngOnInit(): void {}

    ngOnDestroy(): void {}
}
