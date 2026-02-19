import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from '../../ui/section/section.component';
import { CV_DATA } from '../../data/cv-data';

@Component({
  selector: 'app-about',
  imports: [CommonModule, SectionComponent],
  template: `
    <app-section id="about" title="About Me" subtitle="A little bit about who I am and what I do.">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        <div
          class="md:col-span-2 space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
        >
          <p>
            {{ cv.personal.summary }}
          </p>
          <p>
            I am passionate about creating intuitive and dynamic user experiences. With over 5 years
            of experience, I've had the privilege of working on diverse projects ranging from
            complex parking automation systems to global e-commerce platforms.
          </p>
          <p>
            My approach to development is centered around writing clean, maintainable code and
            solving real-world problems through technology. I thrive in collaborative environments
            and enjoy mentoring junior developers.
          </p>
        </div>

        <div
          class="bg-blue-50 dark:bg-blue-900/10 p-8 rounded-2xl border border-blue-100 dark:border-blue-900/30"
        >
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-6">Connect</h3>
          <ul class="space-y-4">
            <li class="flex items-center gap-3">
              <span
                class="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-blue-600 shadow-sm"
              >
                📍
              </span>
              <div>
                <p class="text-sm text-gray-500 dark:text-gray-400">Location</p>
                <p class="font-medium text-gray-900 dark:text-white">{{ cv.personal.location }}</p>
              </div>
            </li>
            <li class="flex items-center gap-3">
              <span
                class="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-blue-600 shadow-sm"
              >
                📧
              </span>
              <div>
                <p class="text-sm text-gray-500 dark:text-gray-400">Email</p>
                <a
                  [href]="'mailto:' + cv.personal.email"
                  class="font-medium text-gray-900 dark:text-white hover:text-blue-600 transition-colors"
                >
                  {{ cv.personal.email }}
                </a>
              </div>
            </li>
            <li class="flex items-center gap-3">
              <span
                class="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-blue-600 shadow-sm"
              >
                💼
              </span>
              <div>
                <p class="text-sm text-gray-500 dark:text-gray-400">Experience</p>
                <p class="font-medium text-gray-900 dark:text-white">5+ Years</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </app-section>
  `,
})
export class AboutComponent {
  cv = CV_DATA;
}
