import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { AdminCreatePortfolioComponent } from './admin-create-portfolio/admin-create-portfolio.component';
import { AdminCreateSkillsComponent } from './admin-create-skills/admin-create-skills.component';
import { AdminEditPortfolioComponent } from './admin-edit-portfolio/admin-edit-portfolio.component';
import { AdminEditSkillsComponent } from './admin-edit-skills/admin-edit-skills.component';
import { AdminGuardGuard } from './admin-guard.guard';
import { AdminPortfolioComponent } from './admin-portfolio/admin-portfolio.component';
import { AdminSkillsComponent } from './admin-skills/admin-skills.component';
import { AdminComponent } from './admin/admin.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: 'about-me', component: AboutMeComponent},
  { path: 'alohomora', component: AdminComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'admin-portfolios', component: AdminPortfolioComponent, canActivate: [AdminGuardGuard]  },
  { path: 'admin-skills', component: AdminSkillsComponent, canActivate: [AdminGuardGuard]  },
  { path: 'admin-edit-portfolio', component: AdminEditPortfolioComponent, canActivate: [AdminGuardGuard]  },
  { path: 'admin-create-portfolio', component: AdminCreatePortfolioComponent, canActivate: [AdminGuardGuard]  },
  { path: 'admin-edit-skills', component: AdminEditSkillsComponent, canActivate: [AdminGuardGuard]  },
  { path: 'admin-create-skills', component: AdminCreateSkillsComponent, canActivate: [AdminGuardGuard]  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
