import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { EdamamService } from "../edamam.service";

@Component({
  selector: "search-criteria",
  templateUrl: "./search-criteria.component.html",
  styleUrls: ["./search-criteria.component.css"]
})
export class SearchCriteriaComponent implements OnInit {
  @Output() onSearchEdaman = new EventEmitter<any>();
  constructor(private edamamService: EdamamService) {}

  ngOnInit() {}

  searchEdamam(form): void {
    this.edamamService.getRecipeData(form.value.recipename);
    console.log("searching");
    this.onSearchEdaman.emit(form.value.recipename);
  }
}
