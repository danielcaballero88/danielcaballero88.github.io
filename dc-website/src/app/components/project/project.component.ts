import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  @Input()
  linkObjs: { label: string; url: string; iconClass: string }[] = [];

  @Input()
  imageAttributionObj: { label: string; url: string } | null = null;

  constructor() {}

  ngOnInit(): void {}
}
