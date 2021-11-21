import { Skills } from "./skills";

export class Portfolio { 
 
  portfolioID: number = 0;
  firstName: string = "";
  lastName: string = "";
  gpa: number = 0.0;
  resume: string = "";
  education: string = "";
  skills: Skills[] = [];

  constructor(portfolioid:number, firstname:string, lastname:string, gpa:number, resume:string, education:string, skills: Skills[]) {
    this.portfolioID = portfolioid;
    this.firstName = firstname;
    this.lastName = lastname;
    this.gpa = gpa;
    this.resume = resume;
    this.education = education;
    this.skills = skills;
  }

}
