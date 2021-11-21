import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DTO } from 'src/app/models/DTO';
import { Skills } from 'src/app/models/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  // Spring Boot API application
  hostname: string = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  // HTTP request to the API application to get all Skills from database
  getSkills(callback: any) {
    let data = this.http.get<DTO>(this.hostname + "/skills");
    let skills: Skills[] = [];
    data.subscribe(Response => {
      Response.data.forEach((element: {
        skillsID: number;
        skill_description: string;
        experience: number;
        portfolio_portfolioID: number;
      }) => {
        skills.push(new Skills(
          element.skillsID,
          element.skill_description,
          element.experience,
          element.portfolio_portfolioID
        ))
      });
    })
    callback(skills);
  }

// HTTP PUT request to the API application to update the given Skills
  updateSkills(skills: Skills, callback: any) {
    this.http.put<Skills>(this.hostname + "/skills/" + skills.skillsID, skills)
      .subscribe((data) => {
        callback(data);
      });
  }

  // HTTP POST request to the API application to create the given Skills
  createSkills(skills: Skills, callback: any) {
    this.http.post<Skills>(this.hostname + "/skills", skills)
      .subscribe((data) => {
        callback(data);
      });
  }

  // HTTP DELETE request to the API application to delete the given Skills
  deleteSkills(id: number, callback: any) {
    this.http.delete(this.hostname + "/skills/" + id)
      .subscribe((data) => {
        callback(data);
      });
  }
}
