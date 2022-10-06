import { Component, OnInit } from '@angular/core';
import { ShopsService } from '../../common/shops.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
    contact: any;
    constructor(private shopsService: ShopsService) {}

    ngOnInit(): void {
        this.getContact();
    }

    getContact(): void {
        this.shopsService.shop$.pipe().subscribe((res) => {
            this.contact = res.contact;
        });
    }
}
