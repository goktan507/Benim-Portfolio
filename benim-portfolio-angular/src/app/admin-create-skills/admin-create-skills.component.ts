import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Portfolio } from '../models/portfolio';
import { Skills } from '../models/skills';
import { PortfolioService } from '../service/portfolio-service/portfolio.service';
import { SkillsService } from '../service/skills-service/skills.service';

@Component({
  selector: 'app-admin-create-skills',
  templateUrl: './admin-create-skills.component.html',
  styleUrls: ['./admin-create-skills.component.css']
})
export class AdminCreateSkillsComponent implements OnInit {

  portfolios: Portfolio[] = [];
  createForm: FormGroup;

  // Initialization of createForm
  constructor(private portfolioService: PortfolioService, private service: SkillsService, private router: Router) {
    this.createForm = new FormGroup({
      skills_description: new FormControl(''),
      experience: new FormControl(''),
      portfolio_portfolioID: new FormControl('')
    })
  }

  // Gets all the portfolios to display PortfolioID and the Portfolio owner's name
  ngOnInit(): void {
    this.portfolioService.getPortfolios((portfolios: Portfolio[]) => {
      this.portfolios = portfolios;
    });
  }

  // Action occurs when the form is submitted
  // Creates the Skills with the data passed from the form
  onSubmit(data: any) {
    this.service.createSkills(new Skills(0, data.skills_description, data.experience, data.portfolio_portfolioID), () => {
      this.router.navigate(['admin-skills']);
    })
  }

}
