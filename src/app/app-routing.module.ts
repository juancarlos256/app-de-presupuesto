import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// componentes
import { IngresarPresupuestoComponent } from './components/ingresar-presupuesto/ingresar-presupuesto.component';
import { GastosComponent } from './components/gastos/gastos.component';

const routes: Routes = [
  { path: '', redirectTo: '/ingrearPresupuesto', pathMatch: 'full' },
  { path: 'ingrearPresupuesto', component: IngresarPresupuestoComponent },
  { path: 'gastos', component: GastosComponent },
  { path: '**', redirectTo: '/ingrearPresupuesto', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
