import { ProductDTO } from "../../entities/ProductDTO";
import { ProductResponse } from "../../entities/ProductResponse";
import { ProductResponseMapper } from "../../mapper/ProductResponseMapper";
import { IDiscountProvider } from "../../providers/IDiscountProvider";
import { IProductsRepository } from "../../repositories/IProductsRepository";

export class CheckoutUseCase {
    constructor(
        private productsRepository: IProductsRepository,
        private discountProvider: IDiscountProvider
    ) { }

    async execute(products: ProductDTO[]): Promise<any> {
        const response = {
            total_amount: 0, // Valor total da compra sem desconto
            total_amount_with_discount: 0, // Valor total da compra com desconto
            total_discount: 0, // Valor total de descontos
            products: []
        }
        response.products = await Promise.all(products.map(async productDTO => {
            let product = await this.productsRepository.findById(productDTO.id)
            if (product) {
                let discount:number = await this.discountProvider.getDiscount(product.id)

                const productResponse:ProductResponse = ProductResponseMapper.mapper(product, discount, productDTO.quantity)
                response.total_amount += productResponse.total_amount;
                response.total_amount_with_discount += productResponse.total_amount-productResponse.discount;
                response.total_discount += productResponse.discount;

                return productResponse;
            }
        }))
        // response.products = productsResponse
        return response;

    }
}