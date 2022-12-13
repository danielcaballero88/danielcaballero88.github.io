import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public menuOpen: boolean = false;

  public linkList: { label: string; url: string; active: boolean }[] = [
    { label: 'Home', url: '/', active: false },
    { label: 'About Me', url: '/about', active: false },
    { label: 'My Projects', url: '/projects', active: false },
    { label: 'Contact Me', url: '/contact', active: false },
  ];

  constructor(public router: Router) {}

  ngOnInit(): void {}
}
