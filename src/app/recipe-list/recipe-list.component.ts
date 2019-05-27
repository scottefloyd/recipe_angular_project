import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from "../recipe";

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

 
  @Input() result: any;


  constructor() { }

  ngOnInit() {
  }

}
