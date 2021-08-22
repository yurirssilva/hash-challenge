import { DiscountProvider } from "../../providers/implementations/DiscountProvider";
import { JSONProductsRepository } from "../../repositories/implementations/JSONProductsRepository";
import { CheckoutController } from "./checkout.controller";
import { CheckoutUseCase } from "./checkout.useCase";

const jsonProductsRepository = new JSONProductsRepository();
const discountProvider = new DiscountProvider();

const checkoutUseCase = new CheckoutUseCase(jsonProductsRepository, discountProvider);

const checkoutController  = new CheckoutController(checkoutUseCase);

export { checkoutUseCase, checkoutController}