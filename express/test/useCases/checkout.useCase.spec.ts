import * as sinon from 'sinon'
import { IDiscountProvider } from "../../src/providers/IDiscountProvider"
import { IProductsRepository } from "../../src/repositories/IProductsRepository"
import { CheckoutUseCase } from '../../src/useCases/Checkout/checkout.useCase'
import { Holidays } from '../../src/utils/Holidays.utils'
import { GIFT_MOCK, PRODUCT_MOCK } from '../mock/Product.mock'
import { PRODUCTS_DTO } from '../mock/ProductoDTO.mock'
import { RESPONSE_GIFT_MOCK, RESPONSE_MOCK } from '../mock/Response.mock'

describe('checkoutUseCase - ', () => {
    let productsRepository: IProductsRepository
    let discountProvider: IDiscountProvider
    let checkoutUseCase: CheckoutUseCase
    beforeAll(() => {
        productsRepository = new sinon.mock();
        discountProvider = new sinon.mock();
        checkoutUseCase = new CheckoutUseCase(productsRepository, discountProvider)
    })
    it('response without gift', async () => {
        productsRepository.findById = jest.fn(() => Promise.resolve(PRODUCT_MOCK))
        discountProvider.getDiscount = jest.fn(() => Promise.resolve(0))
        let response = await checkoutUseCase.execute(PRODUCTS_DTO)
        
        expect(response).toMatchObject(RESPONSE_MOCK);
    })

    it('response with gift', async () => {
        productsRepository.findById = jest.fn(() => Promise.resolve(PRODUCT_MOCK))
        productsRepository.getGift = jest.fn(() => Promise.resolve(GIFT_MOCK))
        discountProvider.getDiscount = jest.fn(() => Promise.resolve(0))
        Holidays.isBlackFriday = jest.fn(() => true)
        let response = await checkoutUseCase.execute(PRODUCTS_DTO)
        
        expect(response).toMatchObject(RESPONSE_GIFT_MOCK);
    })
})