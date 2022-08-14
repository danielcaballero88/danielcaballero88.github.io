import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-website';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {
    this.matIconRegistry.addSvgIcon(
      "twitter",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/icons/twitter.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "linkedin",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/icons/linkedin.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "github",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/icons/github.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "stackoverflow",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/icons/stackoverflow.svg")
    );
  }
}
