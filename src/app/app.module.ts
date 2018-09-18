import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatToolbarModule, MatCardModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ImageCardComponent } from './image-card/image-card.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ImageCardComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatCardModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
