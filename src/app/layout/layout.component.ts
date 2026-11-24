import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { SidebarComponent } from './sidebar.component';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, SidebarComponent, NavbarComponent],
  template: `<app-sidebar /><main class="main"><app-navbar /><section class="content"><router-outlet /></section></main>`,
  styles: `
    .main { margin-left: var(--sidebar-w); min-height: 100vh; }
    .content { padding: 10px 30px 30px; }
    @media (max-width: 991px) { .main { margin-left: 0; } }
    @media (max-width: 600px) { .content { padding: 10px 16px 24px; } }
  `,
})
export class LayoutComponent {}
