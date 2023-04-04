import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actor } from '../models/actor';

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = 'aac727dee395d0d652bd5663b4b4a3a4';
  constructor(private http: HttpClient) {}
  getActor(id: string) {
    return this.http.get<Actor>(`${this.baseUrl}/person/${id}?api_key=${this.apiKey}`);
  }
}
