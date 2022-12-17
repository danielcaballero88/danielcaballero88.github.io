import { Component, OnInit } from '@angular/core';
import { ProjectObj } from 'src/app/models/projects.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  public projectObjs: ProjectObj[] = [
    {
      title: 'How to Spin Up a VM in GCP',
      linkObjs: [
        {
          label: 'Read Post',
          url: 'https://dev.to/danielcaballero88/how-to-spin-up-a-free-linux-virtual-machine-on-google-cloud-platform-1olj',
          icon: 'dev',
        },
      ],
      imageObj: {
        alt: 'Cloud Computing Concept Image',
        src: '/assets/images/projects/gcp-vm.jpg',
        attributionLabel: 'Cloud Computing Vectors by Vecteezy',
        attributionUrl: 'https://www.vecteezy.com/free-vector/cloud-computing',
      },
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
