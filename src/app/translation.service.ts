import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  public items: any = {
    editBtnLabel: 'Редактировать',
    removeBtnLabel: 'Удалить',
    categoryNameLabel: 'Название Категории',
    categoryDescriptionLabel: 'Описание Категории',
    removeCategoryTitleLabel: 'Удаление категории',
    removeCategorySubtitleLabel: 'Вы действительно хотите удалить категорию',
    yesLabel: 'Да',
    noLabel: 'Нет',
    categoryLabel: 'Категория',
    placeLabel: 'Место проведения',
    priceLabel: 'Цена',
    pricePostfixLabeL: 'руб.',
    freeEnterLabel: 'Вход свободный',
    freeLabeL: 'Бесплатно',
    partyNameLabel: 'Название вечеринки',
    addressLabel: 'Адрес',
    descriptionLabel: 'Описание',
    dateHintLabel: 'месяц/число/год',
    dateLabel: 'Дата проведения',
    timeHintLabel: 'часы : минуты',
    timeLabel: 'Время',
    removePartyTitleLabel: 'Удаление вечеринки',
    removePartySubtitleLabel: 'Вы действительно хотите удалить вечеринку',
    partyRemovedLabeL: 'Вечеринка успешно удалена!',
    categoryRemovedLabel: 'Категория успешно удалена!',
    partiesTitle: 'Вечеринки',
    createPartyTitle: 'Создание вечеринки',
    changePartyTitle: 'Редактирование вечеринки',
    categoriesTitle: 'Категории вечеринок',
    createCategoryTitle: 'Создание категории',
    changeCategoryTitle: 'Редактирование категории'


  };

  constructor() {
  }
}
