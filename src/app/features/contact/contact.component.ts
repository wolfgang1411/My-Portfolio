import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from '../../ui/section/section.component';
import { ButtonComponent } from '../../ui/button/button.component';
import { CV_DATA } from '../../data/cv-data';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, SectionComponent],
  template: `
    <app-section
      id="contact"
      title="Get In Touch"
      subtitle="Have a project in mind or want to say hi?"
    >
      <div class="max-w-2xl mx-auto text-center">
        <div class="bg-blue-600 dark:bg-blue-600/20 p-8 md:p-12 rounded-3xl shadow-xl">
          <h3 class="text-2xl md:text-3xl font-bold text-white mb-6">
            Let's build something amazing together!
          </h3>
          <p class="text-blue-100 dark:text-blue-100 mb-8 text-lg">
            I'm currently available for freelance work and open to new opportunities.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a [href]="'mailto:' + cv.personal.email" class="inline-block">
              <button
                class="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-lg hover:bg-gray-50 hover:scale-105 transition-all duration-200"
              >
                Send Email
              </button>
            </a>
            <a
              [href]="cv.personal.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-block"
            >
              <button
                class="w-full sm:w-auto px-8 py-4 bg-blue-700 dark:bg-blue-500 text-white font-bold rounded-xl shadow-lg hover:bg-blue-800 dark:hover:bg-blue-400 hover:scale-105 transition-all duration-200 border border-blue-500"
              >
                LinkedIn
              </button>
            </a>
          </div>

          <div class="mt-12 text-blue-100/60 text-sm">
            Or call me at <span class="text-white font-medium">{{ cv.personal.phone }}</span>
          </div>
        </div>
      </div>
    </app-section>
  `,
})
export class ContactComponent {
  cv = CV_DATA;
}
