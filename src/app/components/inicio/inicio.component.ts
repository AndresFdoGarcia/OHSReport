import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons,NgbModalRef} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  
  constructor( private modalService: NgbModal ) { }

  ngOnInit(): void {
  }

  enviar(modal : any){
    this.modalService.open(modal, { size: 'xl'});    
  } 
 
  
}
