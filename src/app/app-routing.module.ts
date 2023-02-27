import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnularTransaccionComponent } from './anular-transaccion/anular-transaccion.component';
import { ConsultarTarjetaComponent } from './consultar-tarjeta/consultar-tarjeta.component';
import { CrearTarjetaComponent } from './crear-tarjeta/crear-tarjeta.component';
import { CrearTransaccionComponent } from './crear-transaccion/crear-transaccion.component';
import { EliminarTarjetaComponent } from './eliminar-tarjeta/eliminar-tarjeta.component';
import { EnrolarTarjetaComponent } from './enrolar-tarjeta/enrolar-tarjeta.component';

const routes: Routes = [
  {path: '', redirectTo: '/crear-tarjeta', pathMatch: 'full'},
  {path: 'crear-tarjeta', component: CrearTarjetaComponent},
  {path: 'enrolar-tarjeta', component: EnrolarTarjetaComponent},
  {path: 'consultar-tarjeta', component: ConsultarTarjetaComponent},
  {path: 'eliminar-tarjeta', component: EliminarTarjetaComponent},
  {path: 'crear-transaccion', component: CrearTransaccionComponent},
  {path: 'anular-transaccion', component: AnularTransaccionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }