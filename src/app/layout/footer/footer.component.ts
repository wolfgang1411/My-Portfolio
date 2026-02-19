import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Github, Linkedin, Mail } from 'lucide-angular';
import { CV_DATA } from '../../data/cv-data';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, LucideAngularModule],
  template: `
    <footer class="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-6">
          <div class="text-center md:text-left">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {{ cv.personal.name }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm">
              &copy; {{ currentYear }} All rights reserved. Built with Angular 21 & Tailwind.
            </p>
          </div>

          <div class="flex space-x-6">
            <a
              [href]="cv.personal.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            >
              <span class="sr-only">LinkedIn</span>
              <lucide-icon name="linkedin" [size]="24"></lucide-icon>
            </a>
            <a
              [href]="'mailto:' + cv.personal.email"
              class="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            >
              <span class="sr-only">Email</span>
              <lucide-icon name="mail" [size]="24"></lucide-icon>
            </a>
          </div>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  cv = CV_DATA;
  currentYear = new Date().getFullYear();
}
