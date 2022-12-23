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
      title: 'Simple Python Scraper',
      linkObjs: [
        {
          label: 'Read Post',
          url: 'https://dev.to/danielcaballero88/how-to-implement-a-simple-scraper-with-python-57ic',
          icon: 'dev',
        },
        {
          label: 'Github repo',
          url: 'https://github.com/danielcaballero88/scrape-cgeonline',
          icon: 'github',
        },
      ],
      imageObj: {
        alt: 'Implement a Python Scraper Concept',
        src: '/assets/images/projects/python-scraper.jpg',
      },
    },
    {
      title: 'Spin Up a VM in GCP',
      linkObjs: [
        {
          label: 'Read Post',
          url: 'https://dev.to/danielcaballero88/how-to-spin-up-a-free-linux-virtual-machine-on-google-cloud-platform-1olj',
          icon: 'dev',
        },
      ],
      imageObj: {
        alt: 'Cloud Computing Concept Image',
        src: '/assets/images/projects/cloud-computing.jpg',
        attributionLabel: 'Image by Vecteezy',
        attributionUrl: 'https://www.vecteezy.com/free-vector/cloud-computing',
      },
    },
    {
      title: 'Set Up Notifications with Python',
      linkObjs: [
        {
          label: 'Read Post',
          url: 'https://dev.to/danielcaballero88/how-to-set-up-email-and-message-notifications-for-a-python-application-5f3l',
          icon: 'dev',
        },
      ],
      imageObj: {
        alt: 'Notifications Concept Image',
        src: '/assets/images/projects/notifications.jpg',
        attributionLabel: 'Image by Vecteezy',
        attributionUrl: 'https://www.vecteezy.com/free-photos',
      },
    },
    {
      title: 'Deploy to a Linux VM',
      linkObjs: [
        {
          label: 'Read Post',
          url: 'https://dev.to/danielcaballero88/how-to-deploy-your-program-to-run-periodically-in-a-linux-vm-in-gcp-compute-engine-4km6',
          icon: 'dev',
        },
      ],
      imageObj: {
        alt: 'Deploy to Cloud Concept',
        src: '/assets/images/projects/deploy-to-cloud.jpg',
        attributionLabel: 'Image by Vecteezy',
        attributionUrl: 'https://www.vecteezy.com/free-vector/cloud-computing',
      },
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
