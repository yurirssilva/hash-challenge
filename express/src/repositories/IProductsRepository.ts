import { Product } from "../entities/Product";

export interface IProductsRepository {
    findById(id: number): Promise<Product|null>;
    getGift(): Promise<Product|null>
}