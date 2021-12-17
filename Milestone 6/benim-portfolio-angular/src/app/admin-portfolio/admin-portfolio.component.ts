import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEdit, faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import { faCross, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Portfolio } from '../models/portfolio';
import { PortfolioService } from '../service/portfolio-service/portfolio.service';

@Component({
  selector: 'app-admin-portfolio',
  templateUrl: './admin-portfolio.component.html',
  styleUrls: ['./admin-portfolio.component.css']
})
export class AdminPortfolioComponent implements OnInit {

   // Icons to be displayed in view
  addIcon = faPlusSquare;
  editIcon = faEdit;
  deleteIcon = faTrash;

  portfolios: Portfolio[] = [];

  constructor(private portfolioService: PortfolioService, private router: Router) { }

  
  // Gets all the portfolios ready to be displayed in view
  ngOnInit(): void {
    this.portfolioService.getPortfolios((portfolios: Portfolio[]) => {
      this.portfolios = portfolios;
    });
  }

   // route to the edit-portfolio component
  editPortfolio(portfolio: Portfolio){
    this.router.navigate(['admin-edit-portfolio', portfolio]);
  }

   // route to the create-portfolio component with the Portfolio object to be updated
  addPortfolio(){
    this.router.navigate(['admin-create-portfolio']);
  }

   // route to the delete-portfolio component with the ID of the Portfolio to be deleted
  deletePortfolio(id: number){
    this.portfolioService.deletePortfolio(id, () => {
      this.portfolioService.deletePortfolio;
    });
    this.reloadPage();
  }

   // after delete is completed, its necessary to refresh the page to see the changes
  reloadPage(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['admin-portfolios']); 
  }
}
