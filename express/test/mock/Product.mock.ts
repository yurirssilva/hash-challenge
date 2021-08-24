import { Product } from "../../src/entities/Product";

export const PRODUCT_MOCK = new Product({
    "id": 1,
    "title": "Ergonomic Wooden Pants",
    "description": "Deleniti beatae porro.",
    "amount": 15157,
    "is_gift": false
})

export const GIFT_MOCK = new Product({
    "id": 6,
    "title": "Handcrafted Steel Towels",
    "description": "Nam ea sed animi neque qui non quis iste.",
    "amount": 900,
    "is_gift": true
})