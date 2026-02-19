import { Component, signal, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../core/services/theme.service';
import { LucideAngularModule, Menu, X, Sun, Moon } from 'lucide-angular';

@Component({
  selector: 'app-header',
  imports: [CommonModule, LucideAngularModule],
  template: `
    <header
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent"
      [class.bg-white_90]="isScrolled()"
      [class.backdrop-blur-md]="isScrolled()"
      [class.shadow-sm]="isScrolled()"
      [class.dark:bg-gray-950_90]="isScrolled()"
      [class.border-gray-200]="isScrolled()"
      [class.dark:border-gray-800]="isScrolled()"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16 md:h-20">
          <!-- Logo -->
          <a
            href="#"
            (click)="scrollToSection('hero')"
            class="text-2xl font-bold tracking-tighter text-blue-600 dark:text-blue-400"
          >
            MS<span class="text-gray-900 dark:text-white">.</span>
          </a>

          <!-- Desktop Navigation -->
          <nav class="hidden md:flex items-center space-x-8">
            @for (item of navItems; track item.id) {
              <a
                href="javascript:void(0)"
                (click)="scrollToSection(item.id)"
                class="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                [class.text-blue-600]="activeSection() === item.id"
                [class.dark:text-blue-400]="activeSection() === item.id"
              >
                {{ item.label }}
              </a>
            }

            <!-- Theme Toggle -->
            <button
              (click)="themeService.toggleTheme()"
              class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
              aria-label="Toggle theme"
            >
              @if (themeService.darkMode()) {
                <lucide-icon name="sun" [size]="20"></lucide-icon>
              } @else {
                <lucide-icon name="moon" [size]="20"></lucide-icon>
              }
            </button>
          </nav>

          <!-- Mobile Menu Button -->
          <div class="md:hidden flex items-center">
            <button
              (click)="themeService.toggleTheme()"
              class="p-2 mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
            >
              @if (themeService.darkMode()) {
                <lucide-icon name="sun" [size]="20"></lucide-icon>
              } @else {
                <lucide-icon name="moon" [size]="20"></lucide-icon>
              }
            </button>
            <button
              (click)="toggleMenu()"
              class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-900 dark:text-white"
              aria-label="Toggle menu"
            >
              @if (mobileMenuOpen()) {
                <lucide-icon name="x" [size]="24"></lucide-icon>
              } @else {
                <lucide-icon name="menu" [size]="24"></lucide-icon>
              }
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Navigation -->
      @if (mobileMenuOpen()) {
        <div
          class="md:hidden bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 animate-in slide-in-from-top-2"
        >
          <div class="px-4 pt-2 pb-6 space-y-1">
            @for (item of navItems; track item.id) {
              <a
                href="javascript:void(0)"
                (click)="scrollToSection(item.id)"
                class="block px-3 py-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400"
              >
                {{ item.label }}
              </a>
            }
          </div>
        </div>
      }
    </header>
  `,
  styles: [],
})
export class HeaderComponent {
  themeService = inject(ThemeService);

  isScrolled = signal(false);
  mobileMenuOpen = signal(false);
  activeSection = signal('hero');

  readonly navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 20);

    // Update active section logic could go here
  }

  toggleMenu() {
    this.mobileMenuOpen.update((v) => !v);
  }

  scrollToSection(id: string) {
    this.mobileMenuOpen.set(false);
    this.activeSection.set(id);

    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    } else if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
