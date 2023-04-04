import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenresComponent } from './pages/genres/genres.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieComponent } from './pages/movie/movie.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvshowComponent } from './pages/tvshow/tvshow.component';
import { TvshowsComponent } from './pages/tvshows/tvshows.component';
import { ActorComponent } from './pages/actor/actor.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'tvshows',
    component: TvshowsComponent
  },
  {
    path: 'tvshows/genres/:genreId',
    component: TvshowsComponent
  },
  {
    path: 'movies/genres/:genreId',
    component: MoviesComponent
  },
  {
    path: 'genres',
    component: GenresComponent
  },
  {
    path: 'movie/:id',
    component: MovieComponent
  },
  {
    path: 'tvshow/:id',
    component: TvshowComponent
  },
  {
    path: 'actor/:actorId',
    component: ActorComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
