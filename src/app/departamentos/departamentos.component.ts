import { Component, OnInit } from '@angular/core';
import { DepartamentosService } from '../services/departamentos.service';
import { Departamento } from '../models/departemento.model';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css'],
  providers:[DepartamentosService]
})
export class DepartamentosComponent implements OnInit {
  private departamento:Departamento;
  constructor(private departamentosServices:DepartamentosService) { }

  ngOnInit() {
    this.departamentosServices.GetDepartamentos().subscribe(result=>{
      this.departamento=result;
      console.log(this.departamento)

    },err=>{
      console.error(err);
    })


  }

}
