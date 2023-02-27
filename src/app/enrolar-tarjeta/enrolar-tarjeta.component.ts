import { Component } from '@angular/core';
import { enrolarTarjetaI } from '../interfaces/interfaces.interface';
import { ControllerService } from '../service/controller.service';

@Component({
  selector: 'app-enrolar-tarjeta',
  templateUrl: './enrolar-tarjeta.component.html',
  styleUrls: ['./enrolar-tarjeta.component.css']
})
export class EnrolarTarjetaComponent {

  constructor(private servicio:ControllerService) { }

  public request:enrolarTarjetaI = { }

  public response:enrolarTarjetaI = { }

  public enrolarTarjeta(){
    this.servicio.enrolarTarjeta(this.request).subscribe(response => {
      this.response = response;
    });
  }
}
