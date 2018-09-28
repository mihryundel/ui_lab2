import {Component, OnInit} from '@angular/core';
import Party from '../../../models/Party';
import Category from '../../../models/Category';
import {CategoryService} from '../../../services/category.service';
import {PartyService} from '../../../services/party.service';
import {SnackBarService} from '../../../services/snack-bar.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TranslationService} from '../../../translation.service';

@Component({
  selector: 'app-edit-party',
  templateUrl: './edit-party.component.html',
  styleUrls: ['./edit-party.component.less']
})
export class EditPartyComponent implements OnInit {


  public _party: Party;
  public _categories: Category[];

  constructor(private categoryService: CategoryService,
              private partyService: PartyService,
              private snackBarService: SnackBarService,
              private router: Router,
              private route: ActivatedRoute,
              public translation: TranslationService) {
    this._categories = this.categoryService.getAll();
  }

  ngOnInit() {
    const partyId: string = this.route.snapshot.params['id'];
    this._party = this.partyService.getById(partyId);
  }

  public _onSaveParty(): void {
    this.partyService.update(this._party);
    this.router.navigate(['/parties']);
    this.snackBarService.openSnackBar('Вечеринка успешно отредактирована!', '');
  }

  dateSelected(input: string, $event) {

    this._party.date = $event.value;
  }

  public _onSelectCategory($event): void {
    console.log('ev=', $event);
    this._party.category = $event.value;
  }

}
