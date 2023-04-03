import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tv, TvCredits, tvDto, TvImages, TvVideoDto } from '../models/tv';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { GenresDto } from '../models/genre';
@Injectable({
  providedIn: 'root'
})
export class TvshowsService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = 'aac727dee395d0d652bd5663b4b4a3a4';
  constructor(private http: HttpClient) {}
  getTvShows(type: string = 'popular', totalCount: number = 12) {
    return this.http.get<tvDto>(`${this.baseUrl}/tv/${type}?api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.results.slice(0, totalCount));
      })
    );
  }
  searchTvShows(page: Number, searchValue?: string) {
    const uri = searchValue ? '/search/tv' : '/tv/popular';
    return this.http.get<tvDto>(`${this.baseUrl}${uri}?page=${page}&query=${searchValue}&api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.results);
      })
    );
  }
  getTvShowsByGenre(genreId: string, page: number) {
    return this.http
      .get<tvDto>(`${this.baseUrl}/discover/tv?api_key=${this.apiKey}&page=${page}&with_genres=${genreId}`)
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }
  getTvVideos(id: string) {
    return this.http.get<TvVideoDto>(`${this.baseUrl}/tv/${id}/videos?api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.results);
      })
    );
  }
  getTvImages(id: string) {
    return this.http.get<TvImages>(`${this.baseUrl}/tv/${id}/images?api_key=${this.apiKey}`);
  }
  getTvCredits(id: string) {
    return this.http.get<TvCredits>(`${this.baseUrl}/tv/${id}/credits?api_key=${this.apiKey}`);
  }
  getTv(id: string) {
    return this.http.get<tv>(`${this.baseUrl}/tv/${id}?api_key=${this.apiKey}`);
  }
}
