export class Skills { 

  skillsID: number = 0;
  skill_description: string = "";
  experience: number = 0;
  portfolio_portfolioID: number;

  constructor(skillsid: number, skill_description: string, experience: number, portfolioID: number){
    this.skillsID = skillsid;
    this.skill_description = skill_description;
    this.experience = experience;
    this.portfolio_portfolioID = portfolioID;
  }
}
