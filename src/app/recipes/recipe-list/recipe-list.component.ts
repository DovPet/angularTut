import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('Test Name', 'Test Description', 'https://s2.15min.lt/static/cache/ODgweDU4MCwweDAsNjE2MzUwLG9yaWdpbmFsLCxpZD01OTY0NjkmZGF0ZT0yMDEyJTJGMDklMkYyNSwzMDU1NzE3ODY3/lazaniija-su-vistiena-50617b8b73c47.jpg'),
    // tslint:disable-next-line:max-line-length
    new Recipe('Test Name', 'Test Description', 'https://s2.15min.lt/static/cache/ODgweDU4MCwweDAsNjE2MzUwLG9yaWdpbmFsLCxpZD01OTY0NjkmZGF0ZT0yMDEyJTJGMDklMkYyNSwzMDU1NzE3ODY3/lazaniija-su-vistiena-50617b8b73c47.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
