import { Component } from '@angular/core';
import { ControllerService } from '../service/controller.service';
import { consultarTarjetaI } from '../interfaces/interfaces.interface';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-consultar-tarjeta',
  templateUrl: './consultar-tarjeta.component.html',
  styleUrls: ['./consultar-tarjeta.component.css']
})
export class ConsultarTarjetaComponent {

  constructor(private servicio:ControllerService) { }

  public request:consultarTarjetaI = { }

  public response:consultarTarjetaI = { }

  public consultarTarjeta(){
    this.servicio.consultarTarjeta(this.request).subscribe(
      (response: consultarTarjetaI) => {
        this.response = response;
      },
      (error: HttpErrorResponse) => {
        this.response = error.error;
      }
    );
  }
}