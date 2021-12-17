import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Portfolio } from '../models/portfolio';
import { Skills } from '../models/skills';
import { PortfolioService } from '../service/portfolio-service/portfolio.service';
import { SkillsService } from '../service/skills-service/skills.service';

@Component({
  selector: 'app-admin-edit-skills',
  templateUrl: './admin-edit-skills.component.html',
  styleUrls: ['./admin-edit-skills.component.css']
})
export class AdminEditSkillsComponent implements OnInit {
 
  portfolios: Portfolio[] = [];
  skills: any;
  editForm: FormGroup;

  // Initialization of the editForm
  constructor(private portfolioService: PortfolioService, private skillsService: SkillsService, private router: Router, private aRouter: ActivatedRoute) {
    this.editForm = new FormGroup({
      skill_description: new FormControl(''),
      experience: new FormControl(''),
      portfolio_portfolioID: new FormControl('')
    })
  }

  // Gets all the portfolios and the skills related to them
  // PortfolioID and related Portfolio owner's name are being displayed in the view
  ngOnInit(): void {
    this.portfolioService.getPortfolios((portfolios: Portfolio[]) => { 
      this.portfolios = portfolios;
    });
    this.aRouter.params.subscribe(params => {
      this.skills = new Skills(
        params['skillsID'],
        params['skill_description'],
        params['experience'],
        params['portfolio_portfolioID']
      )
    })
  }

  // Action occurs when the form is submitted
  // Updates the skills with the data passed from the form
  onSubmit(data: any){
    this.skillsService.updateSkills(new Skills(
      this.skills.skillsID,
      data.skill_description,
      data.experience,
      data.portfolio_portfolioID
      ), () => {
        this.router.navigate(['admin-skills']);
      })
  }
}
