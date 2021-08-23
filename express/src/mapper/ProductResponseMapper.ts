import { Product } from "../entities/Product";
import { ProductResponse } from "../entities/ProductResponse";

export class ProductResponseMapper {
    public static mapper(product: Product, discount: number, quantity: number): ProductResponse {
        return new ProductResponse({
            id: product.id,
            quantity,
            unit_amount: product.amount,
            total_amount: quantity*product.amount,
            discount: Math.round(product.amount*quantity*discount),
            is_gift: product.is_gift
        })
    }
}