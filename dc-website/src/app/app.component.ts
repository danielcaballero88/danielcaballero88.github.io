import { Component } from '@angular/core';
import { SvgIconServiceService } from 'src/app/shared/services/svg-icon-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dc-website';

  constructor (
    private svgIcons: SvgIconServiceService,
  ) {
    //initialize SVG icons in the matIconRegistry for use.
		this.svgIcons.init();
  }
}
