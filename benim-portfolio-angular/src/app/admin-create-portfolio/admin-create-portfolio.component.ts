import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Portfolio } from '../models/portfolio';
import { PortfolioService } from '../service/portfolio-service/portfolio.service';

@Component({
  selector: 'app-admin-create-portfolio',
  templateUrl: './admin-create-portfolio.component.html',
  styleUrls: ['./admin-create-portfolio.component.css']
})
export class AdminCreatePortfolioComponent implements OnInit {

  createForm: FormGroup;
  
  // Initialization of createForm
  constructor(private service: PortfolioService, private router: Router) {
    this.createForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      gpa: new FormControl(''),
      resume: new FormControl(''),
      education: new FormControl('')
    })
   }

  ngOnInit(): void {
  }

  // Action occurs when the form is submitted
  // Creates the Portfolios with the data passed from the form
  onSubmit(data: any){ 
    this.service.createPortfolio(new Portfolio(0, data.firstName, data.lastName, data.gpa, data.resume, data.education, []), () => {
      this.router.navigate(['admin-portfolios']);
    });
  }
}
