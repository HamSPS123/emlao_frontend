import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss'],
  exportAs       : 'carts'
})
export class CartsComponent implements OnInit {
    @ViewChild('cartsOrigin') private cartOrigin: MatButton;
    @ViewChild('cartsPanel') private cartsPanel: TemplateRef<any>;
    amounts: number = 0;
  constructor() { }

  ngOnInit(): void {
    this.amounts = 1;
  }

}
