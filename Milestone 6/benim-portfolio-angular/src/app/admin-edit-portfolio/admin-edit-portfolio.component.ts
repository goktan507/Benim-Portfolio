import { Component, Input, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Portfolio } from '../models/portfolio';
import { PortfolioService } from '../service/portfolio-service/portfolio.service';

@Component({
  selector: 'app-admin-edit-portfolio',
  templateUrl: './admin-edit-portfolio.component.html',
  styleUrls: ['./admin-edit-portfolio.component.css']
})
export class AdminEditPortfolioComponent implements OnInit {

  portfolio: any;
  editForm: FormGroup;
  
  // Initialization of the editForm
  constructor(private service: PortfolioService, private router: Router, private aRouter: ActivatedRoute) { 
    this.editForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      gpa: new FormControl(''),
      resume: new FormControl(''),
      education: new FormControl('')
    })
  }

  // Gets all the portfolios and the skills related to them
  // Skills are not displayed, just to pass data back correctly
  ngOnInit(): void {
    this.aRouter.params.subscribe(params => {
      this.portfolio = new Portfolio(
        params['portfolioID'],
        params['firstName'],
        params['lastName'],
        params['gpa'],
        params['resume'],
        params['education'],
        params['skills']
        )
    })
  }
  // Action occurs when the form is submitted
  // Updates the Portfolio with the data passed from the form
  onSubmit(data: any){
    this.service.updatePortfolios(new Portfolio(
      this.portfolio.portfolioID, 
      data.firstName, 
      data.lastName, 
      data.gpa, 
      data.resume, 
      data.education, 
      this.portfolio.skills
      ), () => {
      this.router.navigate(['admin-portfolios']);
    })
  }
}
