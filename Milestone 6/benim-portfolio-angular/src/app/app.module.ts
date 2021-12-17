import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminComponent } from './admin/admin.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectsComponent } from './projects/projects.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminPortfolioComponent } from './admin-portfolio/admin-portfolio.component';
import { AdminSkillsComponent } from './admin-skills/admin-skills.component';
import { AdminEditPortfolioComponent } from './admin-edit-portfolio/admin-edit-portfolio.component';
import { AdminEditSkillsComponent } from './admin-edit-skills/admin-edit-skills.component';
import { AdminCreatePortfolioComponent } from './admin-create-portfolio/admin-create-portfolio.component';
import { AdminCreateSkillsComponent } from './admin-create-skills/admin-create-skills.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    AdminComponent,
    PortfolioComponent,
    ProjectsComponent,
    AdminPortfolioComponent,
    AdminSkillsComponent,
    AdminEditPortfolioComponent,
    AdminEditSkillsComponent,
    AdminCreatePortfolioComponent,
    AdminCreateSkillsComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
