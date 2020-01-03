import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppBarComponent } from './component/app-bar/app-bar.component';
import { AppHomeComponent } from './component/app-home/app-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import 'hammerjs';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { InvestorComponent } from './component/investor/investor.component';
import { NeedhelpComponent } from './component/needhelp/needhelp.component';
import { AppFooterComponent } from './component/app-footer/app-footer.component';
import { AppPageconstructionComponent } from './component/app-pageconstruction/app-pageconstruction.component';
import { CareerComponent } from './component/career/career.component';

@NgModule({
  declarations: [AppComponent, AppBarComponent, AppHomeComponent, AboutusComponent, InvestorComponent, NeedhelpComponent, AppFooterComponent, AppPageconstructionComponent, CareerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatTabsModule,
    MatListModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
