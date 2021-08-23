import { Request, Response } from "express";
import { checkoutUseCase } from ".";
import { CheckoutUseCase } from "./checkout.useCase";

export class CheckoutController {
    constructor(private checkoutUseCase: CheckoutUseCase){}

    async execute(request: Request, response: Response): Promise<Response>{
        const { products } = request.body;

        if(!products)
            return response
                .status(400)
                .json({
                    message: "Informe todos os campos",
                })
                .send();

        const res = await checkoutUseCase.execute(products);
               
        return response.status(201).send(res);
    }
}