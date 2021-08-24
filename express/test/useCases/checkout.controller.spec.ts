import request from "supertest";
import * as sinon from 'sinon'
import { app } from "../../src/app";
import { CheckoutUseCase } from "../../src/useCases/Checkout/checkout.useCase";
import { CheckoutController } from "../../src/useCases/Checkout/checkout.controller";

describe('checkout cartController', () => {
    let checkoutUseCase: CheckoutUseCase
    let checkoutController: CheckoutController
    beforeEach(() =>{
        checkoutUseCase = sinon.mock();
        checkoutController = new CheckoutController(checkoutUseCase);
    })
    let body = {
        "products": [
            {
                "id": 1,
                "quantity": 10
            },
            {
                "id": 6,
                "quantity": 1
            }
        ]
    }
    it("should return a cart", async () => {
        await request(app)
            .post('/checkout')
            .send(body)
            .then(() => {
                expect(checkoutUseCase.execute).toBeCalled;
            })
    });
    it("should return status 400 on invalid request", async () => {
        await request(app)
            .post('/checkout')
            .send()
            .then((res) => {
                expect(res.status).toBe(400);
            })
    });
})