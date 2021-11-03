import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { ModalOneComponent } from './shared/modal-one/modal-one.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ModalOneComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalOneComponent]
})
export class AppModule { }
