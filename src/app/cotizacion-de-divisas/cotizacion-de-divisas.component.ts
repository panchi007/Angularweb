import { Component, OnInit } from '@angular/core';
import { CotizacionService } from './../service/cotizacion.service'

@Component({
  selector: 'app-cotizacion-de-divisas',
  templateUrl: './cotizacion-de-divisas.component.html',
  styleUrls: ['./cotizacion-de-divisas.component.css']
})
export class CotizacionDeDivisasComponent implements OnInit {

  public Resultado: any
  public Cantidad: any
  public cambiador1: any
  public cambiador2: any
  public Argentino: string
  public Americano: string
  public Europero: string


  transaccion = {
    "cantidad": "10",
    "desde": "GBP",
    "hasta": "NZD"
  }
  constructor(private cotiservice: CotizacionService) {
    this.Argentino = "ARG"
    this.Americano = "US"
    this.Europero = "EU"
  }
  prosesarsolicitud() {
    this.cotiservice.conversor(this.cambiador1, this.cambiador2, this.Cantidad).subscribe(
      (result) => {
        console.log(this.Resultado)
        this.Resultado = result.result
      },
      (err) => {
        err
      }
    )
  }
//////////////////////////////////////
  argentino() {
    this.cambiador1 = this.Argentino
    console.log(this.cambiador1)
  }
  americano() {
    this.cambiador1 = this.Americano
    console.log(this.cambiador1)
  }
  europeo() {
    this.cambiador1 = this.Europero
    console.log(this.cambiador1)
  }
  ///////////////////////////////////////
  argentino1() {
    this.cambiador2 = this.Argentino
    console.log(this.cambiador2)
  }
  americano2() {
    this.cambiador2 = this.Americano
    console.log(this.cambiador2)
  }
  europeo3() {
    this.cambiador2 = this.Europero
    console.log(this.cambiador2)
  }


  ngOnInit(): void {
    console.log(this.Cantidad)
  }

}
