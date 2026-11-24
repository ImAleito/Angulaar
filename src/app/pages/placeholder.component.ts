import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-placeholder',
  template: `<div class="placeholder"><span class="material-icons">construction</span><h2>{{ nombre }}</h2><p>Esta sección estará disponible próximamente.</p></div>`,
  styles: `.placeholder { background: var(--card); padding: 48px 24px; text-align: center; border-radius: 6px; box-shadow: 0 1px 4px rgba(0,0,0,.14); } .material-icons { font-size: 42px; color: var(--red); } h2 { font-weight: 400; } p { color: var(--muted); }`,
})
export class PlaceholderComponent {
  nombre = inject(ActivatedRoute).snapshot.data['nombre'] as string;
}
