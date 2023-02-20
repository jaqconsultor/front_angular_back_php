import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs';
import {registro } from './registro';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  
  API: string ='https://tugestionadministrativa.com/aulascursosya/agregar.php';
  APIC: string ='https://tugestionadministrativa.com/aulascursosya/consultar.php';
  APIM: string ='https://tugestionadministrativa.com/aulascursosya/modificar.php';
  APIE: string ='https://tugestionadministrativa.com/aulascursosya/eliminar.php';
  APIL: string ='https://tugestionadministrativa.com/aulascursosya/listar.php';

  constructor( private clienteHTTP:HttpClient) { }

  ListarEmpleado():Observable<any> {
    return this.clienteHTTP.get(this.APIL);
  }

  AgregarEmpleado( datosRegistro:registro):Observable<any> {
    console.log( datosRegistro );
    return this.clienteHTTP.post(this.API,datosRegistro);
  }

  BorrarEmpleado( id:any ):Observable<any> {
       return this.clienteHTTP.get( this.APIE + "?id=" + id );
  }

  MostrarEmpleado( id:any ):Observable<any> {
       return this.clienteHTTP.get( this.APIC + "?id=" + id );
  }

  ModificarEmpleado( id:any, datosRegistro:registro):Observable<any> {
    return this.clienteHTTP.post(this.APIM + "?id=" + id,datosRegistro);
  }
  
}

