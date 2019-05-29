import { Component, OnInit } from "@angular/core";
import { EdamamService } from "../edamam.service";

@Component({
  selector: "recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  resultList: any[] = [];
  favorites: any[];

  tempArray: any[] = [];

  constructor(private edamamService: EdamamService) {}

  ngOnInit() {
    this.resultList = this.edamamService.getRecipeList();
    this.tempArray = this.edamamService.getRecipeList();
  }

  addToFavorites(index: number): void {

    this.edamamService.addFavorite(this.resultList[index]);

    console.log("firing");

}
  

  searchEdamam(form): void {
    this.edamamService.getRecipeData(form.value.recipename).then(response => {
      this.resultList = response;
      this.tempArray = response;
    });
    // this.resultList = this.edamamService.getRecipeList();
  }

  filterSearch(form): void {
    console.log(form);

    if (form === "calorieslow") {
      this.resultList.sort(function(a, b) {
        return a.recipe.calories - b.recipe.calories;
      });
    } else if (form === "calorieshigh") {
      this.resultList.sort(function(a, b) {
        return b.recipe.calories - a.recipe.calories;
      });
    }

    if (form === "onetothree") {
      this.resultList = this.tempArray;

      const newResults: any[] = [];
      for (let item of this.resultList) {
        if (
          item.recipe.yield === 1 ||
          item.recipe.yield === 2 ||
          item.recipe.yield === 3
        ) {
          newResults.push(item);
        }
      }
      this.resultList = newResults;
    }
    if (form === "fourtosix") {
      this.resultList = this.tempArray;
      const newResults: any[] = [];
      for (let item of this.resultList) {
        if (
          item.recipe.yield === 4 ||
          item.recipe.yield === 5 ||
          item.recipe.yield === 6
        ) {
          newResults.push(item);
        }
      }
      this.resultList = newResults;
    }
    if (form === "sevenplus") {
      this.resultList = this.tempArray;

      const newResults: any[] = [];
      for (let item of this.resultList) {
        if (item.recipe.yield >= 7) {
          newResults.push(item);
        }
      }
      this.resultList = newResults;
    }
  }
}
