import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'dc-website';

  ngOnInit() {
    const body = document.querySelector('body');
    if (body) {
      body.style.setProperty('--app-height', `${window.innerHeight}px`);
    }
  }
}
