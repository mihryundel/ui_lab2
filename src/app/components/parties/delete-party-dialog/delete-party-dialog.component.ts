import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {PartyService} from '../../../services/party.service';
import {TranslationService} from '../../../translation.service';

@Component({
  selector: 'app-delete-party-dialog',
  templateUrl: './delete-party-dialog.component.html',
  styleUrls: ['./delete-party-dialog.component.less']
})
export class DeletePartyDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeletePartyDialogComponent>,
    public translation: TranslationService,
    @Inject(MAT_DIALOG_DATA) public data: DeletePartyDialogData,
    private partyService: PartyService) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {

  }

  onDeleteClick() {
    this.partyService.delete(this.data.id);
    this.dialogRef.close(this.data.id);
  }

}

export interface DeletePartyDialogData {
  id: string;
  partyName: string;
}

