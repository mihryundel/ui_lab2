import {Component, OnInit} from '@angular/core';
import Category from '../../../models/Category';
import {CategoryService} from '../../../services/category.service';
import {Router} from '@angular/router';
import {TranslationService} from '../../../translation.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.less']
})
export class CreateCategoryComponent implements OnInit {

  public _category: Category;

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    public translation: TranslationService
  ) {
    this._category = new Category();
    this._category.id = '';
    this._category.name = '';
    this._category.description = '';
    this._category.imageUrl = '';
  }

  ngOnInit() {
  }

  public _onSaveCategory(): void {
    this.categoryService.create(this._category);
    this.router.navigate(['/categories']);
  }
}
