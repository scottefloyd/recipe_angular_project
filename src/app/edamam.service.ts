import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Injectable({
  providedIn: "root"
})
export class EdamamService {
  resultList: any[] = [];

  apikey: string = "c2abfafda6f2cb3001fe964447dfcca4";

  constructor(private http: HttpClient, private router: Router ) {}

  getRecipeData(search: string) {
    return this.http
      .get(
        `https://api.edamam.com/search?q=${search}&app_id=596b2721&app_key=${
          this.apikey}&limit=25`
      )
      .toPromise().then(response => {
        this.resultList = response["hits"];
        console.log(this.resultList);
        this.router.navigate(['recipelist']);
        return this.resultList;
      });
  }

  getRecipeList() {
    return this.resultList;
  }
}
