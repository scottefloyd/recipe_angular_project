import { Component, OnInit } from '@angular/core';
import { EdamamService } from '../edamam.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private edamamService: EdamamService) { }

  ngOnInit() {
  }


  searchEdamam() {

    this.edamamService.getRecipeData().subscribe
    (response => {
      this.edamamService = response["data"];

      console.log(response);
    });

  
    

  }

}
