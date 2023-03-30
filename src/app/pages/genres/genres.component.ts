import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/models/genre';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {
  moviesGenres: Genre[] = [];
  tvsGenres: Genre[] = [];
  constructor(private moviesService: MoviesService) {}
  ngOnInit(): void {
    this.getMovieGenres();
    this.getTVGenres();
  }
  getMovieGenres() {
    this.moviesService.getMovieGenres().subscribe((genres) => {
      this.moviesGenres = genres;
    });
  }
  getTVGenres() {
    this.moviesService.getTVGenres().subscribe((genres) => {
      this.tvsGenres = genres;
    });
  }
}
