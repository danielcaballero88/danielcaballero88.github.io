import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


/**
 * Module to encapsulate all Angular Material imports in a single place.
 * Then importing this module in the AppModule will make the Angular Material
 * components available throughout the application, but keeping the AppModule
 * reasonably clean.
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class MaterialModule { }
