import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { AppHomeComponent } from './component/app-home/app-home.component';
import { InvestorComponent } from './component/investor/investor.component';
import { NeedhelpComponent } from './component/needhelp/needhelp.component';
import { AppPageconstructionComponent } from './component/app-pageconstruction/app-pageconstruction.component';
import { CareerComponent } from './component/career/career.component';

const routes: Routes = [
  { path: '', component: AppHomeComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'investor', component: InvestorComponent },
  { path: 'help', component: NeedhelpComponent },
  { path: '404', component: AppPageconstructionComponent },
  { path: 'career', component: CareerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
