import { Component, OnInit, Input } from '@angular/core';
import { EdamamService } from "../edamam.service";

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {


  resultList: any[] = [];


  constructor(private edamamService: EdamamService) { }

  ngOnInit() {
    this.resultList = this.edamamService.getRecipeList();
  }


}
