import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HighlightComponent } from './highlight/highlight.component';
import { HomeComponent } from './home/home.component';
import { PnfComponent } from './pnf/pnf.component';
import { ProductComponent } from './product/product.component';
import { RfComponent } from './rf/rf.component';
import { TdfComponent } from './tdf/tdf.component';

const routes: Routes = [{path:'',redirectTo:'/home',pathMatch:'full'},
                        {path:'home',component:HomeComponent},
                        {path:'tdf',component:TdfComponent},
                        {path:'rf',component:RfComponent},
                        {path:'about-us',component:AboutUsComponent},
                        {path:'highlight',component:HighlightComponent},
                        {path:'product',component:ProductComponent},
                        {path:'**',component:PnfComponent}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
