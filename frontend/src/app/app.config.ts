import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


import { routes } from './app.routes';

importProvidersFrom
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),ReactiveFormsModule]
  
};
