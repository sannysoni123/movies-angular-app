import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie, MovieCredits, MovieImages, MovieVideos } from 'src/app/models/movie';
import { MoviesService } from '../../services/movies.service';
import { IMAGE_SIZES } from '../../constants/image-sizes';
import { first } from 'rxjs/internal/operators/first';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, OnDestroy {
  movie: Movie | null = null;
  imagesSizes = IMAGE_SIZES;
  movieVideos: MovieVideos[] = [];
  movieImages: MovieImages | null = null;
  movieCredits: MovieCredits | null = null;
  similarMovies: Movie[] = [];
  constructor(private route: ActivatedRoute, private moviesService: MoviesService) {}
  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({ id }) => {
      // param && param.id ?
      this.getMovie(id);
      this.getMovieVideos(id);
      this.getMovieImages(id);
      this.getMovieCredits(id);
      this.getSimilarMovies(id);
    });
  }
  ngOnDestroy(): void {}
  getMovieVideos(id: string) {
    this.moviesService.getMovieVideos(id).subscribe((movieVideoData) => {
      this.movieVideos = movieVideoData;
    });
  }
  getSimilarMovies(id: string) {
    this.moviesService.getSimilarMovies(id).subscribe((similarMovies) => {
      this.similarMovies = similarMovies;
    });
  }
  getMovieImages(id: string) {
    this.moviesService.getMovieImages(id).subscribe((movieImagesData) => {
      this.movieImages = movieImagesData;
    });
  }
  getMovieCredits(id: string) {
    this.moviesService.getMovieCredits(id).subscribe((movieCreditsData) => {
      this.movieCredits = movieCreditsData;
      this.movieCredits.cast = this.movieCredits.cast.filter((credit) => credit.profile_path !== null);
    });
  }
  getMovie(id: string) {
    this.moviesService.getMovie(id).subscribe((movieData) => {
      this.movie = movieData;
    });
  }
}
