import { Part } from './Part';
export interface Product {
  id: number;
  name: string;
  parts: {
    amount: number;
    part: Part;
  }[];
  requiredProducts: {
    amount: number;
    requiredProduct: Product;
  }[];
}
