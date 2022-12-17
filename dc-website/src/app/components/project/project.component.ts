import { Component, Input, OnInit } from '@angular/core';
import { ProjectObj } from 'src/app/models/projects.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  public iconClasses = {
    dev: 'fa-brands fa-dev',
    github: 'fab fa-github',
    preview: 'fas fa-eye',
  };

  @Input()
  projectObj: ProjectObj | null = null;

  constructor() {}

  ngOnInit(): void {}
}
