import client from "../../grpc/client";
import { GetDiscountRequest } from "../../proto/discount/discount_pb";
import { IDiscountProvider } from "../IDiscountProvider";

export class DiscountProvider implements IDiscountProvider {

    async getDiscount(productId: number): Promise<number> {
        const discount: number = await new Promise((resolve, reject) =>
            client.getDiscount(new GetDiscountRequest().setProductid(productId), (err, discount) => {
                if (err) {
                    console.log(err);
                    resolve(0);
                } else {
                    resolve(discount.getPercentage());
                }
            })
        )
        return discount;
    }
}