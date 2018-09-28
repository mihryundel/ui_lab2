import {Component, OnInit} from '@angular/core';
import {PartyService} from '../../services/party.service';
import {SnackBarService} from '../../services/snack-bar.service';
import Party from '../../models/Party';
import {MatDialog} from '@angular/material';
import {DeletePartyDialogComponent} from './delete-party-dialog/delete-party-dialog.component';
import {TranslationService} from '../../translation.service';

@Component({
  selector: 'app-parties',
  templateUrl: './parties.component.html',
  styleUrls: ['./parties.component.less']
})
export class PartiesComponent implements OnInit {
  public _parties: Party[];

  constructor(private partyService: PartyService, private snackBarService: SnackBarService, public dialog: MatDialog, public translation: TranslationService) {
    this._parties = this.partyService.getAll();
  }

  ngOnInit() {
  }

  openDialog(party: Party): void {
    const dialogRef = this.dialog.open(DeletePartyDialogComponent, {
      width: '250px',
      data: {id: party.id, categoryName: party.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._parties = this.partyService.getAll();
        this.snackBarService.openSnackBar(this.translation.items.partyRemovedLabeL, 'Ок');
      }
    });

  }
}
