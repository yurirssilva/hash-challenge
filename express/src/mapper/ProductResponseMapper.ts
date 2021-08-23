import { Product } from "../entities/Product";
import { ProductResponse } from "../entities/ProductResponse";

export class ProductResponseMapper {
    public static mapper(product: Product, discount: number, quantity: number, is_gift: boolean = false): ProductResponse {
        return new ProductResponse({
            id: product.id,
            quantity,
            unit_amount: !is_gift ? product.amount : 0,
            total_amount: !is_gift ? quantity*product.amount : 0,
            discount: !is_gift ? Math.round(product.amount*quantity*discount) : 0,
            is_gift: product.is_gift
        })
    }
}