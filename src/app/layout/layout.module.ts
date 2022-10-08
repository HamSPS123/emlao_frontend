import { NgModule } from '@angular/core';
import { LayoutComponent } from 'app/layout/layout.component';
import { ModernLayoutModule } from 'app/layout/modern/modern.module';
import { SharedModule } from 'app/shared/shared.module';
import { EmptyLayoutModule } from './empty/empty.module';

const layoutModules = [ModernLayoutModule, EmptyLayoutModule];

@NgModule({
    declarations: [LayoutComponent],
    imports: [SharedModule,  ...layoutModules],
    exports: [LayoutComponent, ...layoutModules],
})
export class LayoutModule {}
