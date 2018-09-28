import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {CategoryService} from '../../../services/category.service';
import {TranslationService} from '../../../translation.service';

@Component({
  selector: 'app-delete-category-dialog',
  templateUrl: './delete-category-dialog.component.html',
  styleUrls: ['./delete-category-dialog.component.less']
})
export class DeleteCategoryDialogComponent implements OnInit {

  constructor(
    public translation: TranslationService,
    public dialogRef: MatDialogRef<DeleteCategoryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DeleteCategoryDialogData,
    private categoryService: CategoryService) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  onDeleteClick() {
    this.categoryService.delete(this.data.id);
    this.dialogRef.close(this.data.id);
  }
}

export interface DeleteCategoryDialogData {
  id: string;
  categoryName: string;
}
