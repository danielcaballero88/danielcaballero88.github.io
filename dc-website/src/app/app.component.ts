import { AfterViewInit, Component, OnInit } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'dc-website';

  // Add listener to re-calculate --app-height whenever the window is resized.
  resizeObservable$: Observable<Event> = fromEvent(window, 'resize');
  resizeSubscription$: Subscription = this.resizeObservable$.subscribe(
    (evt) => {
      this.calculateAppHeight();
    }
  );

  ngOnInit() {}

  ngAfterViewInit() {
    this.calculateAppHeight();
  }

  calculateAppHeight() {
    const body = document.querySelector('body');
    if (body) {
      body.style.setProperty('--app-height', `${window.innerHeight}px`);
    }
  }
}
