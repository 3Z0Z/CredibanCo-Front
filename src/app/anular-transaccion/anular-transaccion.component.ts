import { Component } from '@angular/core';
import { anularTransaccionI } from '../interfaces/interfaces.interface';
import { ControllerService } from '../service/controller.service';

@Component({
  selector: 'app-anular-transaccion',
  templateUrl: './anular-transaccion.component.html',
  styleUrls: ['./anular-transaccion.component.css']
})
export class AnularTransaccionComponent {

  constructor(private servicio:ControllerService) { }

  public request:anularTransaccionI = { }

  public response:anularTransaccionI = { }

  public anularTransaccion(){
    this.servicio.anularTransaccion(this.request).subscribe(response => {
      this.response = response;
    });
  }
}