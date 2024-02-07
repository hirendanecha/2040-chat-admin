import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketingComponent } from './marketing.component';

const routes: Routes = [
  {
    path: '',
    component: MarketingComponent,
    data: {
      title: 'Marketing Page',
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarketingRoutingModule { }
