import client from "../../src/grpc/client"
import { DiscountProvider } from "../../src/providers/implementations/DiscountProvider"

describe("JSONProductsRepository implementation", () => {
    let discountProvider: DiscountProvider
    beforeAll(() => {
        discountProvider = new DiscountProvider();
    })

    it("findById - should return product", async () => {
        const result = 0
        jest.spyOn(discountProvider, 'getDiscount').mockImplementation(async () => result);
        expect(await discountProvider.getDiscount(1)).toBe(result);
    })

})