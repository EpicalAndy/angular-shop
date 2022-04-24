export class Product {
  public id: number;
  public name: string;
  public count: number;
  public price: number;
  public discount: boolean;

  constructor(id: number, name: string, count: number, price: number, discount: boolean) {
    this.id = id;
    this.name = name;
    this.count = count;
    this.price = price;
    this.discount = discount;
  }
}
