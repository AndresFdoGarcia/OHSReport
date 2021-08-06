import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Formulario } from "../models/formulario"
import { BOOL_TYPE } from '@angular/compiler/src/output/output_ast';
import { Observable, ObservedValueOf } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  formularios : Formulario [] = [];
  

  temporalFormulario: Formulario = {

    deathE : false,
    lugar: "",
    sitio: "",
    descrip : "",
    meca: "",
    tipo: [""],
    agente: [""],
    parte: [""],
    fecha: "",
    empleado : ""
  }

  


  URL_API = environment.apiURL +'formulario'

  constructor(private http : HttpClient) { }

  getFomulario(){

    return this.http.get<Formulario[]>(this.URL_API);
  }

  createFormulario(alfa : Formulario){    
    
    return this.http.post<Formulario>(this.URL_API,this.temporalFormulario)
  } 




}
