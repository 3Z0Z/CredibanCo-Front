import { Component } from '@angular/core';
import { crearTransaccionI } from '../interfaces/interfaces.interface';
import { ControllerService } from '../service/controller.service';

@Component({
  selector: 'app-crear-transaccion',
  templateUrl: './crear-transaccion.component.html',
  styleUrls: ['./crear-transaccion.component.css']
})
export class CrearTransaccionComponent {

  constructor(private servicio:ControllerService) { }

  public request:crearTransaccionI = { }

  public response:crearTransaccionI = { }

  public crearTransaccion(){
    this.servicio.crearTransaccion(this.request).subscribe(response => {
      this.response = response;
    });
  }
}
