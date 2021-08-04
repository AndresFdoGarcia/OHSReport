import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { FormularioService } from 'src/app/services/formulario.service'
import { Formulario } from 'src/app/models/formulario';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  temporalEmpleado = {
    name: "",
    position: "",
    code: 0,
    email: "",
    eps: "",
    arl: ""
  }

  datain : any = {
    deathE : false,
    lugar: "",
    sitio: "",
    descrip : "",
    meca: "",
    tipo: [],
    agente: [],
    parte: [],
    fecha: "",
    empleado: {
      _id: "",
      name: "",
      position: "",
      code: 0,
      email: "",
      eps: "",
      arl: ""
    }
  }
  
  arreglofinal: Array<any> = [];

  constructor( public fomularioService : FormularioService , private modalService: NgbModal) { 

    
  }

  
  ngOnInit(): void {
    this.getFormularios();
    
  }

  getFormularios(){
    this.fomularioService.getFomulario().subscribe(
      res=>{
        this.fomularioService.formularios = res;
        this.ultra();
      },
      err=> console.log(err)      
    )    
  }

  enviar(modal : any){
    this.modalService.open(modal, { size: 'xl', backdrop: 'static'});
  }
  
  PrintPage(){
    window.print();
  }
  
  ultra(){
    for (let i of this.fomularioService.formularios){

      this.datain = i
      this.datain.tipo.shift()
      this.datain.agente.shift()
      this.datain.parte.shift()  
      this.arreglofinal.push(this.datain)
      
      console.log(this.arreglofinal)
      
    }        
  }

    

}
