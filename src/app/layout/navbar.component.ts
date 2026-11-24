import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { MENU } from './menu';

@Component({
  selector: 'app-navbar',
  template: `
    <header class="navbar">
      <h1># {{ titulo() }}</h1>
      <div class="actions">
        <input aria-label="Buscar" placeholder="Buscar..." type="search">
        <button aria-label="Notificaciones"><span class="material-icons">notifications</span><span class="badge">5</span></button>
        <button aria-label="Perfil"><span class="material-icons">person</span></button>
      </div>
    </header>
  `,
  styles: `
    .navbar { display: flex; justify-content: space-between; align-items: center; padding: 14px 30px; gap: 20px; }
    h1 { margin: 0; font-size: 18px; font-weight: 400; }
    .actions { display: flex; align-items: center; gap: 12px; }
    input { border: 0; border-bottom: 1px solid #ccc; background: transparent; padding: 6px; outline: none; }
    button { position: relative; border: 0; background: transparent; cursor: pointer; color: var(--text); }
    .badge { position: absolute; top: -4px; right: -4px; background: var(--red); color: #fff; font-size: 10px;
      border-radius: 50%; width: 16px; height: 16px; display: grid; place-items: center; }
    @media (max-width: 600px) { .navbar { padding: 14px 16px; } input { width: 100px; } }
  `,
})
export class NavbarComponent {
  private router = inject(Router);
  private url = toSignal(this.router.events.pipe(
    filter((event): event is NavigationEnd => event instanceof NavigationEnd),
    map((event) => event.urlAfterRedirects),
  ), { initialValue: this.router.url });
  titulo = computed(() => MENU.find((item) => this.url().startsWith(item.path))?.label ?? 'Dashboard');
}
