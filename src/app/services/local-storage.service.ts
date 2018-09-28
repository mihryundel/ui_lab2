import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {
  }

  public setItem(itemName: string, item: Object): void {
    localStorage.setItem(itemName, JSON.stringify(item));
  }

  public getItem<T>(itemName: string): T {
    return JSON.parse(localStorage.getItem(itemName)) as T;
  }
}
