import { Component } from '@angular/core';
import { eliminarTarjetaI } from '../interfaces/interfaces.interface';
import { ControllerService } from '../service/controller.service';

@Component({
  selector: 'app-eliminar-tarjeta',
  templateUrl: './eliminar-tarjeta.component.html',
  styleUrls: ['./eliminar-tarjeta.component.css']
})
export class EliminarTarjetaComponent {

  constructor(private servicio:ControllerService) { }

  public request:eliminarTarjetaI = { }

  public response:eliminarTarjetaI = { }

  public eliminarTarjeta(){
    this.servicio.eliminarTarjeta(this.request).subscribe(response => {
      this.response = response;
    });
  }
}