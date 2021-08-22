import { ProductDTO } from "../../entities/ProductDTO";
import { IDiscountProvider } from "../../providers/IDiscountProvider";
import { IProductsRepository } from "../../repositories/IProductsRepository";

export class CheckoutUseCase {
    constructor(
        private productsRepository: IProductsRepository,
        private discountProvider: IDiscountProvider
    ) { }

    async execute(products: ProductDTO[]): Promise<any[]> {
        let productsResponse = await Promise.all(products.map(async productDTO => {
            console.log('product: ', productDTO);
            let product = await this.productsRepository.findById(productDTO.id)
            if (product) {
                let discount = await this.discountProvider.getDiscount(product.id)
                console.log('discount', discount);
                let a = { ...product, discount }
                return a;
            }

        }))
        return productsResponse;

    }
}