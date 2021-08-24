import client from "../../grpc/client";
import { GetDiscountRequest } from "../../proto/discount/discount_pb";
import { IDiscountProvider } from "../IDiscountProvider";

export class DiscountProvider implements IDiscountProvider {

    async getDiscount(productId: number): Promise<number> {
        const discount: number = await new Promise((resolve, reject) =>
            client.getDiscount(new GetDiscountRequest().setProductid(productId), (err, discount) => {
                if (err) {
                    resolve(0);
                } else {
                    //Arredondando a porcentagem de desconto retornado
                    resolve(Math.round((discount.getPercentage() + Number.EPSILON) * 100) / 100);
                    // resolve(discount.getPercentage());
                }
            })
        )
        return discount;
    }
}