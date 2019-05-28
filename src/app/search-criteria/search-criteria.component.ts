import { Component, OnInit } from "@angular/core";
import { EdamamService } from "../edamam.service";

@Component({
  selector: "search-criteria",
  templateUrl: "./search-criteria.component.html",
  styleUrls: ["./search-criteria.component.css"]
})
export class SearchCriteriaComponent implements OnInit {

  constructor(private edamamService: EdamamService) {}

  ngOnInit() {}

  searchEdamam(form): void {
    this.edamamService.getRecipeData(form.value.recipename)
    };
  

  // filterSearch(form) {

  //   let filterValue = null;
  //  if (form.value.vegetarian=true) {
  //   filterValue = "health=vegetarian";
  //  }
   

  //   this.edamamService
  //     .getRecipeData(filterValue)
  //     .subscribe(response => {
  //       this.resultList = response["hits"];
  //     });
  // }



}

