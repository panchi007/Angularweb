import { Component, OnInit } from '@angular/core';
import { PortaldenoticiaService } from './../service/portaldenoticia.service'

@Component({
  selector: 'app-portal-noticias-internacionales',
  templateUrl: './portal-noticias-internacionales.component.html',
  styleUrls: ['./portal-noticias-internacionales.component.css']
})
export class PortalNoticiasInternacionalesComponent implements OnInit {

  constructor(private portalservice: PortaldenoticiaService) { }

  public valor: any
  public valor1: any
  public valor2: any
  public valor3: any
  public valor4: any

  ngOnInit(): void {
    console.log(this.obtenerlapelicula())
  }

  obtenerlapelicula() {

    this.portalservice.pelicula("batman").subscribe(
      (result) => {
        this.valor = result
        console.log(result)
      },
      (err) => {
        err
      }
    )

    this.portalservice.pelicula("terminator").subscribe(
      (result) => {
        this.valor1 = result
        console.log(result)
      },
      (err) => {
        err
      }
    )

    this.portalservice.pelicula("el justiciero").subscribe(
      (result) => {
        this.valor2 = result
        console.log(result)
      },
      (err) => {
        err
      }
    )

    this.portalservice.pelicula("back to the future").subscribe(
      (result) => {
        this.valor3 = result
        console.log(result)
      },
      (err) => {
        err
      }
    )

    this.portalservice.pelicula("punisher").subscribe(
      (result) => {
        this.valor4 = result
        console.log(result)
      },
      (err) => {
        err
      }
    )


  }

}
