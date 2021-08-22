export interface IDiscountProvider {
    getDiscount(productId: number): Promise<number>;
}