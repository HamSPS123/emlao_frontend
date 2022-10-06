import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartsComponent } from './carts.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [CartsComponent],
    imports: [
        CommonModule,
        RouterModule,
        OverlayModule,
        PortalModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSlideToggleModule,
        MatTooltipModule,
    ],
    exports: [CartsComponent],
})
export class CartsModule {}
