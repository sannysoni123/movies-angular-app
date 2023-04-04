import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';
import { TvshowsService } from 'src/app/services/tvshows.service';
import { tv } from 'src/app/models/tv';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  popularMovies: Movie[] = [];
  upcomingMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];
  nowPlayingMovies: Movie[] = [];
  topRatedTvShows: tv[] = [];
  constructor(private moviesService: MoviesService, private tvshowsService: TvshowsService) {}
  ngOnInit(): void {
    this.moviesService.getMovies('popular').subscribe((movies) => {
      this.popularMovies = movies;
    });
    this.moviesService.getMovies('upcoming').subscribe((movies) => {
      this.upcomingMovies = movies;
    });
    this.moviesService.getMovies('top_rated').subscribe((movies) => {
      this.topRatedMovies = movies;
    });
    this.moviesService.getMovies('now_playing').subscribe((movies) => {
      this.nowPlayingMovies = movies;
    });
    this.tvshowsService.getTopRatedTVShows().subscribe((tvshow) => {
      this.topRatedTvShows = tvshow;
    });
  }
}
