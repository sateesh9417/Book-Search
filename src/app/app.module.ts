import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PnfComponent } from './pnf/pnf.component';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { TdfComponent } from './tdf/tdf.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RfComponent } from './rf/rf.component';
import { HighlightComponent } from './highlight/highlight.component';
import { filterPipe } from './filter.pipe';
import { FilterProductPipe } from './filter-product.pipe';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    PnfComponent,
    CustomDirectiveDirective,
    TdfComponent,
    RfComponent,
    HighlightComponent,
    filterPipe,
    FilterProductPipe,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
