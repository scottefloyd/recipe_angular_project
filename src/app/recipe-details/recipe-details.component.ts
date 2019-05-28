import { Component, OnInit } from '@angular/core';
import { EdamamService } from "../edamam.service";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: any;

  constructor(private route: ActivatedRoute, private edamamService: EdamamService) { }

  ngOnInit() {
    this.recipe = this.edamamService.getRecipe(
      this.route.snapshot.paramMap.get("index")
    );
    console.log(this.recipe);
  }

}
