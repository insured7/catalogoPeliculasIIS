import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pelicula-detalle',
  templateUrl: './pelicula-detalle.component.html',
  styleUrls: ['./pelicula-detalle.component.css']
})
export class PeliculaDetalleComponent {
  @Input() pelicula: any;

  close(): void {
    this.pelicula = null;
  }
}