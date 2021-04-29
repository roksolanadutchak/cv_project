import { Injectable } from '@angular/core';
import { Skill } from './skill';
import { SKILLS } from './mock-skills'
@Injectable({
  providedIn: 'root'
})
export class SkillService {
  getSkills(): Skill[]{
    return SKILLS
  }
  constructor() { }
}
