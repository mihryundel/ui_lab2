import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../services/category.service';
import Category from '../../models/Category';
import {DeleteCategoryDialogComponent} from './delete-category-dialog/delete-category-dialog.component';
import {MatDialog} from '@angular/material';
import {SnackBarService} from '../../services/snack-bar.service';
import {TranslationService} from '../../translation.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.less']
})
export class CategoriesComponent implements OnInit {

  public _categories: Category[];

  constructor(private categoryService: CategoryService,
              public dialog: MatDialog,
              public translation: TranslationService,
              private snackBarService: SnackBarService) {
  }

  ngOnInit() {
    this._categories = this.categoryService.getAll();
  }

  openDialog(category: Category): void {
    const dialogRef = this.dialog.open(DeleteCategoryDialogComponent, {
      width: '250px',
      data: {id: category.id, categoryName: category.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._categories = this.categoryService.getAll();
        this.snackBarService.openSnackBar(this.translation.items.categoryLabel, 'Ок');
      }
    });
  }

}
