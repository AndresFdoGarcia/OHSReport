import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { FormularioService } from 'src/app/services/formulario.service'
import { Formulario } from 'src/app/models/formulario';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import * as XLSX from 'xlsx';


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

  title = 'angular-app';
  fileName= 'Accidentes.xlsx';
  p = 1;
  pageSize = 7;
  collectionSize = this.arreglofinal.length;
  vector : Array<any>= [];


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
    this.modalService.open(modal, { size: 'xl'});
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
    }        
  }

  exportexcel(): void
  {
    /* pass here the table id */
    //let element = document.getElementById('excel-table');
    //const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.arreglofinal);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
 
  }  

}
