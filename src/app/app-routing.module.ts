import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  HomeComponent } from './home/home.component';
import {  AccountComponent } from './account/account.component';
import {  SignupComponent } from './signup/signup.component';
import {  AboutComponent } from './about/about.component';
import {  ShopmenComponent } from './shopmen/shopmen.component';
import {  ShopwomenComponent } from './shopwomen/shopwomen.component';
import {  MenuComponent } from './menu/menu.component';



const routes: Routes = [
  { path:'', component: HomeComponent},
  { path:'account', component: AccountComponent},
  { path:'signup', component: SignupComponent},
  { path:'about', component: AboutComponent},
  { path:'shopmen', component: ShopmenComponent},
  { path:'shopwomen', component: ShopwomenComponent},
  { path:'menu', component: MenuComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
