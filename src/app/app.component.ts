import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {NavigationEnd, Router} from '@angular/router';
import {TranslationService} from './translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnDestroy {
  title = 'Вечеринки';
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router, private translation: TranslationService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const path = event.url;
        if (path === '/parties') {
          this.title = this.translation.items.partiesTitle;
        } else if (path === '/categories') {
          this.title = this.translation.items.categoriesTitle;
        } else if (path === '/create-party') {
          this.title = this.translation.items.createPartyTitle;
        } else if (path === '/create-category') {
          this.title = this.translation.items.createCategoryTitle;
        } else if (path.indexOf('/edit-party') > -1) {
          this.title = this.translation.items.changePartyTitle;
        } else if (path.indexOf('/edit-category') > -1) {
          this.title = this.translation.items.changeCategoryTitle;
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
