import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SvgIconServiceService {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}
  init() {
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
