import { Component, OnInit } from '@angular/core';
import { Skill } from '../skill';
import { SKILLS } from '../mock-skills' 
import { SkillService} from '../skill.service'
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = []

  selectedSkill?: Skill;
  constructor(private SkillService: SkillService) { }

  ngOnInit(): void {
    this.getSkills();
  }
  getSkills(): void {
    this.skills = this.SkillService.getSkills();
  }
  onSelect(skill: Skill):void{
    this.selectedSkill = skill;
  }
}
