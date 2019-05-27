import { Component, OnInit } from '@angular/core';
import { EdamamService } from '../edamam.service';
@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor(private edamamService: EdamamService) { }

  ngOnInit() {
  }

}
