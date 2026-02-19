import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from '../../ui/section/section.component';
import { CV_DATA } from '../../data/cv-data';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, SectionComponent, LucideAngularModule],
  template: `
    <app-section id="projects" title="Projects" subtitle="Featured projects and case studies.">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        @for (project of cv.projects; track project.name) {
          <div
            class="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div class="p-8">
              <div class="flex justify-between items-start mb-4">
                <h3
                  class="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                >
                  {{ project.name }}
                </h3>
                <!-- Links Placeholder (since CV didn't have specific links, usually we add them) -->
                <!-- 
                <div class="flex gap-2">
                  <a href="#" class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 transition-colors">
                    <lucide-icon name="external-link" [size]="20"></lucide-icon>
                  </a>
                </div>
                -->
              </div>

              <p class="text-gray-600 dark:text-gray-300 mb-6 min-h-[3rem]">
                {{ project.description }}
              </p>

              <div class="mb-6">
                <h4
                  class="text-sm font-semibold text-gray-900 dark:text-white mb-2 uppercase tracking-wider text-xs"
                >
                  Key Features
                </h4>
                <ul class="space-y-1">
                  @for (feature of project.features.slice(0, 3); track feature) {
                    <li class="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <span class="mt-1.5 w-1 h-1 bg-green-500 rounded-full flex-shrink-0"></span>
                      <span class="line-clamp-1">{{ feature }}</span>
                    </li>
                  }
                </ul>
              </div>

              <div
                class="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-50 dark:border-gray-800"
              >
                @for (tech of project.technologies; track tech) {
                  <span
                    class="px-2 py-1 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-xs font-medium border border-gray-100 dark:border-gray-700"
                  >
                    {{ tech }}
                  </span>
                }
              </div>
            </div>
          </div>
        }
      </div>
    </app-section>
  `,
})
export class ProjectsComponent {
  cv = CV_DATA;
}
