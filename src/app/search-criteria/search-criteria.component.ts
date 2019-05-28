import { Component, OnInit } from "@angular/core";
import { EdamamService } from "../edamam.service";

@Component({
  selector: "search-criteria",
  templateUrl: "./search-criteria.component.html",
  styleUrls: ["./search-criteria.component.css"]
})
export class SearchCriteriaComponent implements OnInit {
  resultList: any[] = [];

  constructor(private edamamService: EdamamService) {}

  ngOnInit() {}

  searchEdamam(form) {
    this.edamamService
      .getRecipeData(form.value.recipename)
      .subscribe(response => {
        this.resultList = response["hits"];
        console.log(this.resultList)   
      });
  }



  filterSearch(form) {

    let filterValue = null;
   if (form.value.vegetarian=true) {
    filterValue = "health=vegetarian";
   }
   

    this.edamamService
      .getRecipeData(filterValue)
      .subscribe(response => {
        this.resultList = response["hits"];
      });
  }



}

