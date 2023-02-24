import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { provideRouter } from '@angular/router';
import { APP_ROUTES } from './app/app-routing.module';
import { AppComponent } from './app/app.component';

import { StoreModule } from '@ngrx/store'

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(APP_ROUTES),
    importProvidersFrom(StoreModule.forRoot({})
      )
  ],

})
