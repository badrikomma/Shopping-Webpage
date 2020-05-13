import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccountComponent } from './account/account.component';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { ShopmenComponent } from './shopmen/shopmen.component';
import { ShopwomenComponent } from './shopwomen/shopwomen.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccountComponent,
    SignupComponent,
    AboutComponent,
    ShopmenComponent,
    ShopwomenComponent,
    MenuComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
