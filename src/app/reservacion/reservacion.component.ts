import { Component } from '@angular/core';
import { ServicioreservacionService } from '../servicioreservacion.service'; //IMPORTAR SERVICIO DEL CRUD
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-reservacion',
  templateUrl: './reservacion.component.html',
  styleUrls: ['./reservacion.component.css']
})
export class ReservacionComponent {
  constructor(public ServicioreservacionService: ServicioreservacionService, private modalService: NgbModal) { }


  reservacion = {
    nombre: "",
    pax: "",
    tarjeta: "",
    fecha: "",
    hora: ""
  }

  agregarReservacion() {
    this.ServicioreservacionService.agregar(this.reservacion);
  }

  mostrarReservacion(content: any,pos:number) {
    this.reservacion = this.ServicioreservacionService.reservaciones[pos];
    this.modalService.open(content, {
      ariaLabelledBy: 'Modal Modificar'
    }
    );

  }

  modificarReservacion(pos: number) {
    this.ServicioreservacionService.reservaciones[pos]=this.reservacion;

  }



  eliminarReservacion(pos: number) {
    this.ServicioreservacionService.borrar(pos);
  }
}
