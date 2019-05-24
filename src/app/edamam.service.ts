import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EdamamService {

  apikey: string = "c2abfafda6f2cb3001fe964447dfcca4";

  constructor(private http: HttpClient) { }



  getRecipeData() {

    return this.http.get(`https://api.edamam.com/search?q=chicken&app_id=596b2721&app_key=${this.apikey}&limit=25`);

  }



}
