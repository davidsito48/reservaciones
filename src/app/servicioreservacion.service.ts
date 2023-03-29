import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioreservacionService {

  constructor() { }

  demo1 = {nombre:"David",pax:"5",tarjeta:"0987",fecha:"12-01-2023",hora:"23:00"};
  demo2 = {nombre:"Angelina",pax:"4",tarjeta:"4567",fecha:"03/02/2023",hora:"19:00"};
  demo3 = {nombre:"Yulissa",pax:"2",tarjeta:"4523",fecha:"24/02/2023",hora:"11:00"};
  demo4 = {nombre:"Natalia",pax:"2",tarjeta:"8876",fecha:"10/03/2023",hora:"08:00"};
  demo5 = {nombre:"Rosy",pax:"1",tarjeta:"0098",fecha:"15/03/2023",hora:"16:00"};

  reservaciones:any=[this.demo1,this.demo2,this.demo3,this.demo4,this.demo5];

  //CRUD
  agregar(reservacion:any){ //C
    this.reservaciones.push(reservacion);
  }

  borrar(id:number){//D
    delete(this.reservaciones[id]);
  }

  modificar(reservacion:any){//U
    this.agregar(reservacion);
  }

  getReservacion(id:number){
    return this.reservaciones[id];
  }
}
