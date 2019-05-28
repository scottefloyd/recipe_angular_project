import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EdamamService {

  resultList: any[] = [];

  apikey: string = "c2abfafda6f2cb3001fe964447dfcca4"; 

  constructor(private http: HttpClient) { }



  getRecipeData(search: string) {

    return this.http.get(`https://api.edamam.com/search?q=${search}&app_id=596b2721&app_key=${this.apikey}&limit=25`).
    subscribe(response => {
      this.resultList = response["hits"];

      //console.log(response);
      
    });

  }

getRecipeList() {
  return this.resultList;
}



}
