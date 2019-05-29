import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.css']
})
export class FavoritePageComponent implements OnInit {
favList: any[] =[];

  constructor() { }

  ngOnInit() {
  }

}
