import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Injectable({
  providedIn: "root"
})
export class EdamamService {
  resultList: any[] = [];
  favorites: any[] = [];

  apikey: string = "c2abfafda6f2cb3001fe964447dfcca4";

  constructor(private http: HttpClient, private router: Router) { }

  getRecipeData(search: string) {
    return this.http
      .get(
        `https://api.edamam.com/search?q=${search}&app_id=596b2721&app_key=${
        this.apikey}&limit=10`
      )
      .subscribe(response => {
        this.resultList = response["hits"];
        console.log(this.resultList);

        this.router.navigate(['recipelist']);
      });
  }

  getRecipeList() {
    return this.resultList;
  }

  getFavorites() {
    return this.favorites;
  }

  getRecipe(index: string | number): any {
    // for (let recipe of this.resultList){
    //   if (recipe.label == label){
    //     return recipe;
    //   }
    // }
    console.log(this.resultList[index]);
    return this.resultList[index];
  }

  addFavorite(favorited) {
    
    this.favorites.push(favorited);
  }

  deleteFavorite(index: number) {


    this.favorites.splice(index, 1);
    

    console.log("hello");
  }

}

