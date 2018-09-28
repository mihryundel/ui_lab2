import {Injectable} from '@angular/core';
import {LocalStorageService} from './local-storage.service';
import Category from '../models/Category';
import {v4 as uuid} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private readonly CATEGORIES_KEY: string = 'categories';

  constructor(private storageService: LocalStorageService) {
    const storedCategories: Category[] = this.storageService.getItem(this.CATEGORIES_KEY);
    if (!storedCategories) {
      this.storageService.setItem(this.CATEGORIES_KEY, [
        {id: uuid(), name: 'Концерт', description: 'Выступление известной группы, ансамбля, певца или оркестра'},
        {id: uuid(), name: 'Квартирник', description: 'Просто посидим дома и послушаем музыку'},
        {id: uuid(), name: 'Клубная вечеринка', description: 'Танцы под громкую ритмичную музыку и море алкоголя!'}
      ]);
    }
  }

  public getAll(): Category[] {
    return this.storageService.getItem<Category[]>(this.CATEGORIES_KEY);
  }

  public getById(id: string): Category {
    const storedCategories: Category[] = this.storageService.getItem(this.CATEGORIES_KEY);
    return storedCategories.find(item => item.id === id);
  }

  public create(category: Category): void {
    const storedCategories: Category[] = this.storageService.getItem(this.CATEGORIES_KEY);
    category.id = uuid();
    storedCategories.push(category);
    this.storageService.setItem(this.CATEGORIES_KEY, storedCategories);
  }

  public update(category: Category): void {
    const storedCategories: Category[] = this.storageService.getItem(this.CATEGORIES_KEY);
    const index: number = storedCategories.findIndex(item => item.id === category.id);
    storedCategories[index] = category;
    this.storageService.setItem(this.CATEGORIES_KEY, storedCategories);
  }

  public delete(id: string): void {
    const storedCategories: Category[] = this.storageService.getItem(this.CATEGORIES_KEY);
    const newParties: Category[] = storedCategories.filter(item => item.id !== id);
    this.storageService.setItem(this.CATEGORIES_KEY, newParties);
  }
}
