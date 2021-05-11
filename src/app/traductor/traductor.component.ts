import { Component, OnInit } from '@angular/core';
import { TraductorService } from '../service/traductor.service';

@Component({
  selector: 'app-traductor',
  templateUrl: './traductor.component.html',
  styleUrls: ['./traductor.component.css']
})
export class TraductorComponent implements OnInit {

  public valor: string
  public loqueentra: string
  public spain: string
  public ingls: string
  public franc: string
  public itali: string
  public cambiador: string
  public cambiador2: string
  public cambiadorsalida: string

  constructor(private traducSERvice: TraductorService) {

    this.loqueentra = "dad"
    ////////////////////////////
    this.ingls = "en"
    this.spain = "es"
    this.franc = "fr"
    /////////////////////////////
    this.cambiador2 = "es"
    this.cambiador = "en"
    this.cambiadorsalida = "en"

  }

  converttraduc() {

    this.traducSERvice.traductor(this.cambiador, this.cambiador2, this.loqueentra).subscribe(
      (result) => {
        this.valor = result.outputs
        console.log(result.outputs)
      },
      (err) => {
        err
      }
    )
  }

  ///////////////////////////////////////

  cambiaelidiomaingles() {
    this.cambiador = this.ingls
    console.log(this.cambiador)
  }
  cambielidiomaespan() {
    this.cambiador = this.spain
    console.log(this.cambiador)
  }
  cambiaelidiomafrance() {
    this.cambiador = this.franc
    console.log(this.cambiador)
  }

  //////////////////////////////////////

  cambiaelidiomaingles1() {
    this.cambiador2 = this.ingls
    console.log(this.cambiador2)
  }
  cambielidiomaespan2() {
    this.cambiador2 = this.spain
    console.log(this.cambiador2)
  }
  cambiaelidiomafrance3() {
    this.cambiador2 = this.franc
    console.log(this.cambiador2)
  }

  ngOnInit(): void {
    console.log(this.converttraduc())
  }


}
