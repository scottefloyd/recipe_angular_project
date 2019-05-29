import { Component, OnInit } from '@angular/core';
import { EdamamService } from "../edamam.service";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  resultList: any[] = [];

  constructor(private edamamService: EdamamService) { }

  ngOnInit() {
  }

  searchEdamam(form): void {
    this.edamamService.getRecipeData(form.value.recipename).then(response => {
      this.resultList = response;
    });
    // this.resultList = this.edamamService.getRecipeList();
  }

}
