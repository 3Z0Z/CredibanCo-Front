import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { ControllerService } from '../service/controller.service';
import { crearTarjetaI } from '../interfaces/interfaces.interface';

@Component({
  selector: 'app-crear-tarjeta',
  templateUrl: './crear-tarjeta.component.html',
  styleUrls: ['./crear-tarjeta.component.css'],
})
export class CrearTarjetaComponent {
  constructor(private servicio: ControllerService) {}

  public tarjeta: crearTarjetaI = { };

  public response: crearTarjetaI = { };

  public crearTarjeta() {
    this.servicio.crearTarjeta(this.tarjeta).subscribe(
      (response: crearTarjetaI) => {
        this.response = response;
      },
      (error: HttpErrorResponse) => {
        this.response = error.error;
      }
    );
  }
}
