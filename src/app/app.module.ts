import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule, MatCardModule, MatGridListModule,MatListModule } from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';


import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { OrderpageComponent } from './orderpage/orderpage.component';


import { DishService } from './services/dish.service';

import 'hammerjs';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    OrderpageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatDialogModule,

  ],
  providers: [DishService,],
  bootstrap: [AppComponent],
  entryComponents: [
    OrderpageComponent,
  ]
})
export class AppModule { }
