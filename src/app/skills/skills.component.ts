import { Component, OnInit } from '@angular/core';
import { Skill } from '../skill';
import { SKILLS } from '../mock-skills' 
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills = SKILLS;
  selectedSkill?: Skill;
  constructor() { }

  ngOnInit(): void {
  }
  onSelect(skill: Skill):void{
    this.selectedSkill = skill;
  }
}
