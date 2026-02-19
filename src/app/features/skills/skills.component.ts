import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from '../../ui/section/section.component';
import { CV_DATA } from '../../data/cv-data';

@Component({
  selector: 'app-skills',
  imports: [CommonModule, SectionComponent],
  template: `
    <app-section id="skills" title="Skills" subtitle="Technologies and tools I work with.">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        @for (category of cv.skills; track category.name) {
          <div
            class="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow"
          >
            <h3
              class="text-lg font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-100 dark:border-gray-800 pb-2"
            >
              {{ category.name }}
            </h3>
            <div class="flex flex-wrap gap-2">
              @for (skill of category.skills; track skill) {
                <span
                  class="px-3 py-1 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors cursor-default"
                >
                  {{ skill }}
                </span>
              }
            </div>
          </div>
        }
      </div>
    </app-section>
  `,
})
export class SkillsComponent {
  cv = CV_DATA;
}
