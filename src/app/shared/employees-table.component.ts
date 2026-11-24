import { Component, input } from '@angular/core';
import { Employee } from '../core/dashboard.models';

@Component({
  selector: 'app-employees-table',
  template: `
    <article class="card">
      <div class="header"><h3>Estadísticas de empleados</h3><p>Personal incorporado este mes</p></div>
      <table>
        <thead><tr><th>ID</th><th>Nombre</th><th>Salario</th><th>País</th><th>Ciudad</th></tr></thead>
        <tbody>
          @for (employee of employees(); track employee.id) {
            <tr><td>{{ employee.id }}</td><td>{{ employee.nombre }}</td><td>{{ employee.salario }}</td><td>{{ employee.pais }}</td><td>{{ employee.ciudad }}</td></tr>
          } @empty { <tr><td class="empty" colspan="5">No hay empleados.</td></tr> }
        </tbody>
      </table>
    </article>
  `,
  styles: `
    .card { background: var(--card); border-radius: 6px; padding: 15px; box-shadow: 0 1px 4px rgba(0,0,0,.14); overflow-x: auto; }
    .header { margin-top: -35px; padding: 12px 16px; border-radius: 3px; background: var(--orange); color: #fff; box-shadow: 0 4px 12px rgba(0,0,0,.25); } h3 { margin: 0; font-weight: 400; font-size: 18px; } p { margin: 4px 0 0; font-size: 13px; opacity: .9; }
    table { width: 100%; border-collapse: collapse; margin-top: 12px; font-size: 14px; min-width: 520px; } th { text-align: left; color: var(--orange); padding: 10px 8px; } td { padding: 10px 8px; border-top: 1px solid #eee; } .empty { color: var(--muted); text-align: center; }
  `,
})
export class EmployeesTableComponent {
  employees = input.required<Employee[]>();
}
