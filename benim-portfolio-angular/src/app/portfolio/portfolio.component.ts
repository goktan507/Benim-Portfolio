import { Component, OnInit } from '@angular/core';
import { Portfolio } from '../models/portfolio';
import { PortfolioService } from '../service/portfolio-service/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent implements OnInit {

  portfolios: Portfolio[] = [];

  constructor(private portfolioService: PortfolioService) { }

  // Gets all the portfolios with the skills related to them, ready to be displayed on view 
  ngOnInit(): void {
    this.portfolioService.getPortfolios((portfolios: Portfolio[]) => {
      this.portfolios = portfolios;
    });
  }
}
