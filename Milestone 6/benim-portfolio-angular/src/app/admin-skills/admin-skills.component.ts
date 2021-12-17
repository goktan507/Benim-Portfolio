import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEdit, faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Skills } from '../models/skills';
import { SkillsService } from '../service/skills-service/skills.service';

@Component({
  selector: 'app-admin-skills',
  templateUrl: './admin-skills.component.html',
  styleUrls: ['./admin-skills.component.css']
})
export class AdminSkillsComponent implements OnInit {

  // Icons to be displayed in view
  addIcon = faPlusSquare;
  editIcon = faEdit;
  deleteIcon = faTrash;

  skills: Skills[] = [];

  constructor(private skillsService: SkillsService, private router: Router) { }

  // Gets all the skills ready to be displayed in view
  ngOnInit(): void {
    this.skillsService.getSkills((skills: Skills[]) => {
      this.skills = skills;
    })
  }

  // route to the create-skills component
  addSkills(){
    this.router.navigate(['admin-create-skills']);
  }

  // route to the edit-skills component with the skills object to be updated
  editSkills(skills: Skills){
    this.router.navigate(['admin-edit-skills', skills]);
  }

  // route to the delete-skills component with the ID of Skills to be deleted
  deleteSkills(skillsID: number){
    this.skillsService.deleteSkills(skillsID, () => {
      this.skillsService.deleteSkills;
    });
    this.reloadPage();
  }

  // after delete is completed, its necessary to refresh the page to see the changes
  reloadPage(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['admin-skills']); 
  }
}
