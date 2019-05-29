import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { EdamamService } from './edamam.service';
import { AppComponent } from './app.component';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { FavoritePageComponent } from './favorite-page/favorite-page.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [

  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "search", component: SearchCriteriaComponent },
  { path: "recipelist", component: RecipeListComponent },
  { path: "recipelist/:id", component: RecipeDetailsComponent },
  { path: "favoritepage", component: FavoritePageComponent },
  { path: "**", component: ErrorComponentComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    SearchCriteriaComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    FavoritePageComponent,
    HomeComponent,
    ErrorComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule, MatRadioModule, 
    BrowserAnimationsModule, ReactiveFormsModule
  ],
  providers: [EdamamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
