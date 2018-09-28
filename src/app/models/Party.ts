import Category from './Category';

export default class Party {
  id?: string;
  name: string;
  description: string;
  isFree: boolean;
  date: Date;
  time: string;
  price: number;
  address: string;
  category: Category;
}
