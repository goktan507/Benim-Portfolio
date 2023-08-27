import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DTO } from 'src/app/models/DTO';
import { Portfolio } from 'src/app/models/portfolio';
import { Skills } from 'src/app/models/skills';
import { SkillsService } from '../skills-service/skills.service';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  // Spring Boot API application
  hostname: string = "http://localhost:8080";

  constructor(private http: HttpClient, private service: SkillsService) { }

  // HTTP request to the API application to get all Portfolios with Skills related to them
  getPortfolios(callback: any) {
    let data = this.http.get<DTO>(this.hostname + "/portfolios");
    let portfolios: Portfolio[] = [];
    let skills: Skills[] = [];
    let temp: Skills[];
    this.service.getSkills((a: Skills[]) => {
      temp = a;
    });
    data.subscribe(Response => {
      Response.data.forEach((element: {
        portfolioID: number;
        firstName: string;
        lastName: string;
        gpa: number;
        resume: string;
        education: string;
      }) => {
        skills = [];
        temp.forEach(skill => {   
          if(skill.portfolio_portfolioID == element.portfolioID){
            skills.push(skill);
          }
        })
        portfolios.push(new Portfolio(
          element.portfolioID,
          element.firstName,
          element.lastName,
          element.gpa,
          "https://via.placeholder.com/150", //placeholder for img
          //element.resume,
          element.education,
          skills
        ))
      });
    })
    callback(portfolios);
  }

  // HTTP PUT request to the API application to update the given Portfolio
  updatePortfolios(portfolio: Portfolio, callback: any) {
    this.http.put<Portfolio>(this.hostname + "/portfolios/" + portfolio.portfolioID, portfolio)
      .subscribe((data) => {
        callback(data);
      });
  }

  
  // HTTP POST request to the API application to create the given Portfolio
  createPortfolio(portfolio: Portfolio, callback: any) {
    this.http.post<Portfolio>(this.hostname + "/portfolios", portfolio)
      .subscribe((data) => {
        callback(data);
      });
  }

  // HTTP DELETE request to the API application to delete the given Portfolio
  deletePortfolio(id: number, callback: any) {
    this.http.delete(this.hostname + "/portfolios/" + id)
      .subscribe((data) => {
        callback(data);
      });
  }
}
