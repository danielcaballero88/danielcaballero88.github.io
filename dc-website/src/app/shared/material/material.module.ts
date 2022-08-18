import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";


/**
 * Module to encapsulate all Angular Material imports in a single place.
 * Then importing this module in the AppModule will make the Angular Material
 * components available throughout the application, but keeping the AppModule
 * reasonably clean.
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    MatIconModule,
  ],
  providers: [MatIconRegistry],
  exports: [
    MatIconModule
  ]
})
export class MaterialModule { }
