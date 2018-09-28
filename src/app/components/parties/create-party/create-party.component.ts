import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../../services/category.service';
import {Router} from '@angular/router';
import {PartyService} from '../../../services/party.service';
import Party from '../../../models/Party';
import Category from '../../../models/Category';
import {SnackBarService} from '../../../services/snack-bar.service';
import {TranslationService} from '../../../translation.service';

@Component({
  selector: 'app-create-party',
  templateUrl: './create-party.component.html',
  styleUrls: ['./create-party.component.less']
})
export class CreatePartyComponent implements OnInit {

  public _party: Party;
  public _categories: Category[];

  constructor(private categoryService: CategoryService,
              private partyService: PartyService,
              private snackBarService: SnackBarService,
              public translation: TranslationService,
              private router: Router) {
    this._categories = this.categoryService.getAll();
    this._party = new Party();
    this._party.id = '';
    this._party.name = '';
    this._party.address = '';
    this._party.date = new Date();
    this._party.time = '';
    this._party.description = '';
    this._party.price = 0;
    this._party.isFree = true;
    this._party.category = this._categories[0];
  }

  ngOnInit() {
  }

  public _onSaveParty(): void {
    this.partyService.create(this._party);
    this.router.navigate(['/parties']);
    this.snackBarService.openSnackBar('Вечеринка успешно добавлена!', '');
  }

  dateSelected(input: string, $event) {

    this._party.date = $event.value;
    console.log('event =', this._party);
  }

  public _onSelectCategory($event): void {
    console.log('ev=', $event);
  }

  public _isAllFieldsFilled(): boolean {
    // @ts-ignore
    return this._party.category && this._party.date !== null && this._party.price !== null && this._party.address && this._party.description && this._party.time && this._party.name;
  }
}
