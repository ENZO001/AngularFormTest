import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroComponent } from './templateForm/hero/hero.component';
import { MemberComponent } from './modelDrivenForm/member/member.component';

const routes: Routes = [
  {path:'hero', component: HeroComponent},
  {path:'member', component: MemberComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
