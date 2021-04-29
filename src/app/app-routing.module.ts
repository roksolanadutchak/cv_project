import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './skills/skills.component'
import { AboutMeComponent } from './about-me/about-me.component'
import { ExperienceComponent } from './experience/experience.component'
import { HomeComponent } from './home/home.component'
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'skills', component: SkillsComponent},
  { path: 'about-me', component: AboutMeComponent},
  { path: 'experience', component: ExperienceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
