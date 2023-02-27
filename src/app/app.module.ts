import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CrearTarjetaComponent } from './crear-tarjeta/crear-tarjeta.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EnrolarTarjetaComponent } from './enrolar-tarjeta/enrolar-tarjeta.component';
import { ConsultarTarjetaComponent } from './consultar-tarjeta/consultar-tarjeta.component';
import { EliminarTarjetaComponent } from './eliminar-tarjeta/eliminar-tarjeta.component';
import { CrearTransaccionComponent } from './crear-transaccion/crear-transaccion.component';
import { AnularTransaccionComponent } from './anular-transaccion/anular-transaccion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CrearTarjetaComponent,
    EnrolarTarjetaComponent,
    ConsultarTarjetaComponent,
    EliminarTarjetaComponent,
    CrearTransaccionComponent,
    AnularTransaccionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
