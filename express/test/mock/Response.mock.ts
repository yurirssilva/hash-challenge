import { ProductResponse } from "../../src/entities/ProductResponse";

export const RESPONSE_MOCK = {
    total_amount: 151570,
    total_amount_with_discount: 151570,
    total_discount: 0,
    products: [
        new ProductResponse({
            id: 1,
            quantity: 10,
            unit_amount: 15157,
            total_amount: 151570,
            discount: 0,
            is_gift: false
        })
    ]
}

export const RESPONSE_GIFT_MOCK = {
    total_amount: 151570,
    total_amount_with_discount: 151570,
    total_discount: 0,
    products: [
        new ProductResponse({
            id: 1,
            quantity: 10,
            unit_amount: 15157,
            total_amount: 151570,
            discount: 0,
            is_gift: false
        }),
        new ProductResponse({
            discount: 0,
            id: 6,
            is_gift: true,
            quantity: 1,
            total_amount: 0,
            unit_amount: 0,
        }),
    ]
}