import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pelicula-item',
  templateUrl: './pelicula-item.component.html',
  styleUrls: ['./pelicula-item.component.css']
})
export class PeliculaItemComponent {
  @Input() pelicula: any;
  @Input() addFavoritos!: (movie: any) => void;
  @Output() verDetalles = new EventEmitter<any>(); // Evento para mostrar detalles

  onAddFavoritos(): void {
    this.addFavoritos(this.pelicula);
  }

  onVerDetalles(): void {
    this.verDetalles.emit(this.pelicula); // Emitir el evento con la película actual
  }
}