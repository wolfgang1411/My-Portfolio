import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section',
  imports: [CommonModule],
  template: `
    <section [id]="id()" [class]="'relative py-20 overflow-hidden ' + (className() || '')">
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        @if (title()) {
          <div class="mb-12 md:mb-16 text-center">
            <h2
              class="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4"
            >
              {{ title() }}
            </h2>
            @if (subtitle()) {
              <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                {{ subtitle() }}
              </p>
            }
          </div>
        }
        <ng-content></ng-content>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionComponent {
  id = input<string>('');
  title = input<string>('');
  subtitle = input<string>('');
  className = input<string>('');
}
