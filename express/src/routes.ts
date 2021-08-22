import { Router } from "express";
import { checkoutController } from "./useCases/Checkout";

const router = Router();


router.post("/checkout", (request, response) =>{
    return checkoutController.execute(request, response);
})

export { router };