import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../ui/button/button.component';
import { CV_DATA } from '../../data/cv-data';

@Component({
  selector: 'app-hero',
  imports: [CommonModule, ButtonComponent],
  template: `
    <section class="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <!-- Background Elements -->
      <div
        class="absolute top-0 right-0 -z-10 opacity-30 dark:opacity-20 translate-x-1/3 -translate-y-1/3"
      >
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          class="w-[800px] h-[800px] text-blue-100 dark:text-blue-900 fill-current"
        >
          <path
            d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.7C91.4,-34.3,98.1,-19.6,95.8,-4.8C93.5,9.9,82.3,24.7,70.9,37C59.5,49.3,48,59,35.6,65.6C23.2,72.2,9.9,75.7,-2.8,80.5C-15.5,85.3,-27.6,91.4,-39.1,86.8C-50.6,82.2,-61.5,66.9,-70.6,51.8C-79.7,36.7,-87,21.8,-88.4,6.2C-89.8,-9.4,-85.3,-25.7,-76.3,-39.8C-67.3,-53.9,-53.8,-65.8,-39.6,-73C-25.4,-80.2,-10.5,-82.7,2.2,-86.5C14.9,-90.3,29.8,-95.4,44.7,-76.4Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <!-- Text Content -->
          <div class="space-y-6">
            <div
              class="inline-block px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 font-medium text-sm"
            >
              Available for Freelance Projects
            </div>

            <h1
              class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight"
            >
              Hi, I'm <span class="text-blue-600 dark:text-blue-400">{{ cv.personal.name }}</span>
            </h1>

            <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium">
              {{ cv.personal.role }}
            </p>

            <p class="text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
              I build pixel-perfect, scalable web and mobile applications using Angular, React, and
              Node.js.
            </p>

            <div class="flex flex-wrap gap-4 pt-4">
              <app-button variant="primary" size="lg" (onClick)="scrollToProjects()">
                View Projects
              </app-button>
              <app-button variant="outline" size="lg" (onClick)="scrollToContact()">
                Contact Me
              </app-button>
            </div>

            <!-- Social Proof / Tech Stack Mini -->
            <div class="pt-8 border-t border-gray-100 dark:border-gray-800">
              <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">Tech Stack</p>
              <div
                class="flex flex-wrap gap-6 opacity-70 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <!-- Simple Text Representatives for Tech Stack (Logos would be images) -->
                <span class="font-bold text-xl text-red-600">Angular</span>
                <span class="font-bold text-xl text-blue-400">React</span>
                <span class="font-bold text-xl text-green-600">Node.js</span>
                <span class="font-bold text-xl text-blue-500">TypeScript</span>
              </div>
            </div>
          </div>

          <!-- Hero Image -->
          <div class="relative flex justify-center md:justify-end">
            <div class="relative w-72 h-72 md:w-96 md:h-96">
              <!-- Decorative Circle -->
              <div
                class="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 opacity-20 blur-2xl transform rotate-6"
              ></div>

              <!-- Image Container -->
              <div
                class="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 bg-gray-200 dark:bg-gray-800 w-full h-full flex items-center justify-center"
              >
                <!-- Placeholder for Profile Image -->
                <span class="text-6xl">👨‍💻</span>
                <!-- Must replace with actual image later -->
                <!-- <img [ngSrc]="'assets/profile.jpg'" width="400" height="400" priority class="object-cover w-full h-full" alt="Mohd Shoaib" /> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class HeroComponent {
  cv = CV_DATA;

  scrollToProjects() {
    this.scrollTo('projects');
  }

  scrollToContact() {
    this.scrollTo('contact');
  }

  private scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }
}
