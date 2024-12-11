import { Component, OnInit } from '@angular/core';
import { OmdbApiService } from '../Servicios/omdb-api.service';
import { PeliculaItemComponent } from '../pelicula-item/pelicula-item.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-peliculas-list',
  standalone: true,
  imports: [PeliculaItemComponent, NgFor, NgIf],
  templateUrl: './peliculas-list.component.html',
  styleUrls: ['./peliculas-list.component.css']
})
export class PeliculasListComponent implements OnInit {
  peliculas: any[] = []; // Lista de todas las películas
  peliculasFav: any[] = []; // Lista de películas favoritas
  searchTitle: string = ''; // Título de búsqueda
  selectedPelicula: any; // Película seleccionada para ver detalles

  constructor(private omdbService: OmdbApiService) { }

  ngOnInit(): void {
    this.cargaPeliculas('batman'); // Carga inicial de películas
  }

  cargaPeliculas(titulo: string): void {
    this.omdbService.getPeliculas(titulo).subscribe((response: any) => {
      if (response && response.Search) {
        this.peliculas = response.Search; // Asignar la lista de películas
      }
    });
  }

  addFavoritos(movie: any): void {
    if (!this.peliculasFav.some(fav => fav.imdbID === movie.imdbID)) {
      this.peliculasFav.push(movie); // Agregar a la lista de favoritas
    } else {
      console.log('La película ya está en favoritos');
    }
  }

  EliminarDeFavoritos(movie: any): void {
    this.peliculasFav = this.peliculasFav.filter(m => m.imdbID !== movie.imdbID); // Eliminar de la lista de favoritas
  }

  buscarPeliculas(event: Event): void {
    const input = event.target as HTMLInputElement; // Afirmación de tipo
    this.searchTitle = input.value; // Obtener el valor del input
    this.cargaPeliculas(this.searchTitle); // Llama a cargaPeliculas con el título de búsqueda
  }

  verDetalles(pelicula: any): void {
    this.selectedPelicula = pelicula; // Asignar la película seleccionada
  }
}