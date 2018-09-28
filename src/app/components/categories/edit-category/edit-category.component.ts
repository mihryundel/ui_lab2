import {Component, OnInit} from '@angular/core';
import Category from '../../../models/Category';
import {CategoryService} from '../../../services/category.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SnackBarService} from '../../../services/snack-bar.service';
import {TranslationService} from '../../../translation.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.less']
})
export class EditCategoryComponent implements OnInit {

  public _category: Category;

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBarService: SnackBarService,
    public translation: TranslationService
  ) {
  }

  ngOnInit() {
    const categoryId: string = this.route.snapshot.params['id'];
    this._category = this.categoryService.getById(categoryId);
  }

  public _onSaveCategory(): void {
    this.categoryService.update(this._category);
    this.router.navigate(['/categories']);
    this.snackBarService.openSnackBar('Категория успешно изменена', '');
  }

}
