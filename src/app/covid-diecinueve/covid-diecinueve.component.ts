import { Component, OnInit } from '@angular/core';
import { EstadisticacovidService } from '../service/estadisticacovid.service'

@Component({
  selector: 'app-covid-diecinueve',
  templateUrl: './covid-diecinueve.component.html',
  styleUrls: ['./covid-diecinueve.component.css']
})
export class CovidDiecinueveComponent implements OnInit {

  public cambiador: any
  public cambiador2: any
  public cambiador3: any
  public fallecidos: boolean = true
  public recuperados: boolean = true
  public tatalcase: boolean = true

  constructor(private estadisservicecovid: EstadisticacovidService) { }

  obtenerpais() {
    this.estadisservicecovid.estadisticacovid(this.cambiador2).subscribe(
      (resutl) => {
        this.cambiador3 = resutl
        console.log(resutl)
      },
      (err) => {
        err
      }
    )
  }
  ngOnInit(): void {

  }
  cambiante() {
    if (this.cambiador == "Argentina") {
      this.cambiador2 = "Argentina"
      console.log(this.cambiador2)
      // console.log(this.fallecidos)
    }
    if (this.cambiador == "Bolivia") {
      this.cambiador2 = "Bolivia"
      console.log(this.cambiador2)
      // console.log(this.fallecidos)
    }
    if (this.cambiador == "Brazil") {
      this.cambiador2 = "Brazil"
      console.log(this.cambiador2)
      // console.log(this.fallecidos)
    }
    if (this.cambiador == "Chile") {
      this.cambiador2 = "Chile"
      console.log(this.cambiador2)
      // console.log(this.fallecidos)
    }
  }


}
