import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import {collectionReducer} from './store/collection/collection.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(APP_ROUTES), // Provide the main routing configuration
    provideHttpClient(),
    provideStore(),
    provideStore({ collection: collectionReducer }),
],
};
