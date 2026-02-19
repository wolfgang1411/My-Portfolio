import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  importProvidersFrom,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  LucideAngularModule,
  Menu,
  X,
  Sun,
  Moon,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
} from 'lucide-angular';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    importProvidersFrom(
      LucideAngularModule.pick({ Menu, X, Sun, Moon, Github, Linkedin, Mail, ExternalLink }),
    ),
  ],
};
