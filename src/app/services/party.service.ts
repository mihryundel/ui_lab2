import {Injectable} from '@angular/core';
import {LocalStorageService} from './local-storage.service';
import Party from '../models/Party';
import {v4 as uuid} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class PartyService {
  private readonly PARTIES_KEY: string = 'parties';

  constructor(private storageService: LocalStorageService) {
    const storedParties: Party[] = this.storageService.getItem(this.PARTIES_KEY);
    if (!storedParties) {
      this.storageService.setItem(this.PARTIES_KEY, []);
    }
  }

  public getAll(): Party[] {
    return this.storageService.getItem<Party[]>(this.PARTIES_KEY);
  }

  public getById(id: string): Party {
    const storedParties: Party[] = this.storageService.getItem(this.PARTIES_KEY);
    return storedParties.find(item => item.id === id);
  }

  public create(party: Party): void {
    const storedParties: Party[] = this.storageService.getItem(this.PARTIES_KEY);
    party.id = uuid();
    storedParties.push(party);
    this.storageService.setItem(this.PARTIES_KEY, storedParties);
  }

  public update(party: Party): void {
    const storedParties: Party[] = this.storageService.getItem(this.PARTIES_KEY);
    const index: number = storedParties.findIndex(item => item.id === party.id);
    storedParties[index] = party;
    this.storageService.setItem(this.PARTIES_KEY, storedParties);
  }

  public delete(id: string): void {
    const storedParties: Party[] = this.storageService.getItem(this.PARTIES_KEY);
    const newParties: Party[] = storedParties.filter(item => item.id !== id);
    this.storageService.setItem(this.PARTIES_KEY, newParties);
  }
}
