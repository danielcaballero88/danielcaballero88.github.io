import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public menuOpen: boolean = false;

  public linkList: { label: string; url: string }[] = [
    { label: 'Home', url: '#' },
    { label: 'About Me', url: '#' },
    { label: 'My Projects', url: '#' },
    { label: 'Contact Me', url: '#' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
