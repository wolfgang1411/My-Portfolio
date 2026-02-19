import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from '../../ui/section/section.component';
import { CV_DATA } from '../../data/cv-data';

@Component({
  selector: 'app-experience',
  imports: [CommonModule, SectionComponent],
  template: `
    <app-section
      id="experience"
      title="Experience"
      subtitle="My professional journey and career highlights."
    >
      <div class="space-y-12">
        @for (job of cv.experience; track job.company) {
          <div class="relative pl-8 md:pl-0">
            <!-- Timeline Line (Desktop) -->
            <div
              class="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800 -translate-x-1/2"
            ></div>

            <div class="md:flex items-start justify-between group">
              <!-- Left Side (Date & Location) -->
              <div class="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                <div
                  class="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium mb-2"
                >
                  {{ job.duration }}
                </div>
                <h3
                  class="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                >
                  {{ job.company }}
                </h3>
                <p
                  class="text-gray-500 dark:text-gray-400 text-sm flex items-center md:justify-end gap-1"
                >
                  <span>📍</span> {{ job.location }}
                </p>
              </div>

              <!-- Center Dot -->
              <div
                class="absolute left-0 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-950 md:-translate-x-1/2 mt-1.5 z-10"
              ></div>

              <!-- Right Side (Role & Description) -->
              <div class="md:w-1/2 md:pl-12">
                <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  {{ job.role }}
                </h4>
                <ul class="space-y-2">
                  @for (point of job.description; track point) {
                    <li class="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                      <span
                        class="mt-1.5 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"
                      ></span>
                      <span>{{ point }}</span>
                    </li>
                  }
                </ul>
              </div>
            </div>
          </div>
        }
      </div>
    </app-section>
  `,
})
export class ExperienceComponent {
  cv = CV_DATA;
}
