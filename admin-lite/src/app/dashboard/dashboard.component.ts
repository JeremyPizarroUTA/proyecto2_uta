import { Component, OnInit } from '@angular/core';
import { DashboardService, Venta,Coment,Status } from '../servicios/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  ventas:Venta[]=[];
  comentario:Coment[]=[];
  estado:Status[]=[];

  constructor(private _dashboardService: DashboardService) { 
    //console.log("Creando el componente dashboard...")
    console.log(_dashboardService.getVentas());
    this.ventas =_dashboardService.getVentas();
    console.log(this.ventas[0])
    
    console.log(_dashboardService.getComent());
    this.comentario =_dashboardService.getComent();
    console.log(this.comentario[0])
    
    console.log(_dashboardService.getStatus());
    this.estado =_dashboardService.getStatus();
    console.log(this.estado[0])

    

  }

  ngOnInit(): void {
  }

}
