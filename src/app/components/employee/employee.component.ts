import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { FormularioService } from 'src/app/services/formulario.service';
import { Formulario } from 'src/app/models/formulario';
import { FormGroup, FormArray, FormControl, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  
  
  constructor(public employeeService: EmployeeService , public fomularioService : FormularioService , private router: Router) { }

  deathE = "false";
  lugar = "No seleccionado";
  sitio = "No seleccionado";
  descrip = "";
  meca = "No seleccionado";
  fecha = "No seleccionado";

  emailFormArray: Array<any> = [];
  partesFormArray: Array<any> = [];
  agentesFormArray: Array<any> = [];

  categories = [ 
    {name :"Fractura", id: 1},
    {name :"Torcedura,Esgince", id: 2},
    {name :"Trauma interno", id: 3},
    {name :"Amputación", id: 4},
    {name :"Herida", id: 5},
    {name :"Trauma superficial", id: 6},
    {name :"Lesiones Múltilpes", id: 7},
    {name :"Quemadura", id: 8},
    {name :"Intoxicación", id: 9},
    {name :"Efecto del tiempo", id: 10},
    {name :"Asfixia", id: 11},
    {name :"Efecto Electricidad", id: 12}		
  ];

  partes = [
    {name :"Cabeza", id: 1},
    {name :"Ojos", id: 2},
    {name :"Cuello", id: 3},
    {name :"Tronco", id: 4},
    {name :"Abdomen", id: 5},
    {name :"M.Superiores", id: 6},
    {name :"M.Inferiores", id: 7},
    {name :"Ub.Múltiples", id: 8},
  ];

  agentes = [
    {name :"Equipos/Maq", id: 1},
    {name :"M.Transporte", id: 2},
    {name :"Herramientas", id: 3},
    {name :"Sustancias", id: 4},
    {name :"Lugar trabajo", id: 5},
    {name :"Animales", id: 6},
    {name :"no Clasificado", id: 7},
  ];

  

  ngOnInit(): void {
    
  }

  getEmployees(){
    this.employeeService.getEmployee().subscribe(
      res => {
        this.employeeService.employees = res;
        console.log(res)
      },
      err => console.log(err)
    )

  }

  getemploy(form: NgForm){
    
    this.employeeService.oneEmploy(form.value.code).subscribe(
      res => {
        
        this.employeeService.temporalEmployee.name = res.name;
        this.employeeService.temporalEmployee._id = res._id;
        this.employeeService.temporalEmployee.email = res.email;
        this.employeeService.temporalEmployee.position = res.position;
        this.employeeService.temporalEmployee.eps = res.eps;
        this.employeeService.temporalEmployee.arl = res.arl;
        this.employeeService.temporalEmployee.code = res.code;
        form.reset()
      },
      err => console.log(err)
    )
  }

  deleteEmployee(){
    if (confirm('Esta seguro de borrar este empleado ?')){
      this.employeeService.temporalEmployee.name = ''
        this.employeeService.temporalEmployee._id = ''
        this.employeeService.temporalEmployee.position = ''
        this.employeeService.temporalEmployee.email = ''
        this.employeeService.temporalEmployee.eps = ''
        this.employeeService.temporalEmployee.arl = ''
        this.employeeService.temporalEmployee.code = 0
    }
    
  }

  createformularios(form : NgForm){

    console.log(this.deathE);
    const flag = this.deathE

    if(flag == "true"){
      this.fomularioService.temporalFormulario.deathE = true;
      
    }else{
      this.fomularioService.temporalFormulario.deathE = false;
    }

    for(let i of this.emailFormArray){
      this.fomularioService.temporalFormulario.tipo?.push(i)
    }
        
    this.fomularioService.temporalFormulario.lugar = this.lugar;
    
    for(let i of this.partesFormArray){
      this.fomularioService.temporalFormulario.parte?.push(i)
    }

    for(let i of this.agentesFormArray){
      this.fomularioService.temporalFormulario.agente?.push(i)
    }
    
    
    this.fomularioService.temporalFormulario.sitio = this.sitio;
    this.fomularioService.temporalFormulario.descrip = this.descrip;
    this.fomularioService.temporalFormulario.meca = this.meca;
    this.fomularioService.temporalFormulario.empleado = this.employeeService.temporalEmployee._id;
    this.fomularioService.temporalFormulario.fecha = this.fecha;

    this.fomularioService.createFormulario(form.value).subscribe(
      res=>{
        console.log(res)
        form.reset();
        this.router.navigate(['/formulario'])
        
      },
      err=>console.log(err)
    )

    this.emailFormArray = [];
    this.partesFormArray=[];
    this.agentesFormArray=[];
    this.fomularioService.temporalFormulario.tipo = [""];
    this.fomularioService.temporalFormulario.parte = [""];
    this.fomularioService.temporalFormulario.agente = [""];
    
    

  }

  onChange(event:any) {
    if(event.target.checked) {
      console.log(event.target.value)
      this.emailFormArray.push(event.target.value);
    } else {
      let index = this.emailFormArray.indexOf(event.target.value);
      this.emailFormArray.splice(index,1);
    }
     
  }

  onChange2(event:any){
    if(event.target.checked) {
      
      this.partesFormArray.push(event.target.value);
    } else {
      let index = this.partesFormArray.indexOf(event.target.value);
      this.partesFormArray.splice(index,1);
    }    
  }

  onChange3(event:any){
    if(event.target.checked) {
      
      this.agentesFormArray.push(event.target.value);
    } else {
      let index = this.agentesFormArray.indexOf(event.target.value);
      this.agentesFormArray.splice(index,1);
    }
  }

  onTextboxInput(event:any){
    
      this.descrip = event.target.value;    
  }

  onTextDate(event:any){
    
    this.fecha = event.target.value;
    console.log(this.fecha)   
}

}
