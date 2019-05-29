import { Component, OnInit } from '@angular/core';
import { EdamamService } from "../edamam.service";


@Component({
  selector: 'favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.css']
})
export class FavoritePageComponent implements OnInit {

  favorites: any[];
  recipeList: any[];


  constructor(private edamamService: EdamamService) { }  

   ngOnInit() {
    this.favorites = this.edamamService.getFavorites();
  }

  removeFavorite(index: number) {

    this.edamamService.deleteFavorite(index);
   
  }


}

