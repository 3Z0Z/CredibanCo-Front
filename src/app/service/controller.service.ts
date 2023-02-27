import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { consultarTarjetaI, crearTarjetaI, enrolarTarjetaI, eliminarTarjetaI, crearTransaccionI, anularTransaccionI } from '../interfaces/interfaces.interface';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {

  private servicioUrl:string = 'http://localhost:8080/credibanco';

  constructor(private http:HttpClient) { }

  public crearTarjeta(request:crearTarjetaI):Observable<crearTarjetaI> {
    return this.http.post(`${this.servicioUrl}/nueva`, request);
  }

  public enrolarTarjeta(request:enrolarTarjetaI):Observable<enrolarTarjetaI>{
    return this.http.put(`${this.servicioUrl}/enrolar`, request);
  }

  public consultarTarjeta(request:consultarTarjetaI):Observable<consultarTarjetaI>{
    return this.http.get(`${this.servicioUrl}/consulta/${request.pan}`);
  }

  public eliminarTarjeta(request:eliminarTarjetaI):Observable<eliminarTarjetaI>{
    return this.http.delete(`${this.servicioUrl}/eliminar?${request.pan}&${request.numValidacion}&${request.panConfirm}`);
  }

  public crearTransaccion(request:crearTransaccionI):Observable<crearTransaccionI>{
    return this.http.post(`${this.servicioUrl}/transaccion`, request);
  }

  public anularTransaccion(request:anularTransaccionI):Observable<anularTransaccionI>{
    return this.http.put(`${this.servicioUrl}/anular`, request);
  }
}