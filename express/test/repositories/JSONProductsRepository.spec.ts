import { Product } from "../../src/entities/Product";
import { JSONProductsRepository } from "../../src/repositories/implementations/JSONProductsRepository"
import { GIFT_MOCK, PRODUCT_MOCK } from "../mock/Product.mock";

describe("JSONProductsRepository implementation", () => {
    let jSONProductsRepository: JSONProductsRepository
    beforeAll(() => {
        jSONProductsRepository = new JSONProductsRepository();
    })

    it("findById - should return product", async () => {
        let product: Product = await jSONProductsRepository.findById(1)
        expect(product).toMatchObject(PRODUCT_MOCK);
    })

    it("findById - should return null on invalid id", async () => {
        let product: Product = await jSONProductsRepository.findById(10)
        expect(product).toBe(null);
    })

    it("findGift - should return gift product", async () => {
        let product: Product = await jSONProductsRepository.getGift()
        expect(product).toMatchObject(GIFT_MOCK);
    })

})