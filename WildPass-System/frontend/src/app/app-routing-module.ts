import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './component/home-page-component/home-page-component';
import { LogInComponent } from './component/log-in-component/log-in-component';
import { OrderCardComponent } from './component/order-card-component/order-card-component';
import { OurAnimalsComponent } from './component/our-animals-component/our-animals-component';
import { PersonalAreaComponent } from './component/personal-area-component/personal-area-component';
import { ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  {path:'HomePage', component:HomePageComponent},
  {path:'LogIn', component:LogInComponent},
  {path:'OrderCard', component:OrderCardComponent},
  {path:'OurAnimals', component:OurAnimalsComponent},
  {path:'PersonalArea', component:PersonalAreaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
