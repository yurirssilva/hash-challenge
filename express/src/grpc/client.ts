import * as grpc from 'grpc';
import { DiscountClient } from '../proto/discount/discount_grpc_pb';

require("dotenv").config({
    path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});

console.log(`gRPC: ${process.env.GRPC_HOST}:${process.env.GRPC_PORT}`)
export default new DiscountClient(
    `${process.env.GRPC_HOST}:${process.env.GRPC_PORT}`,
    grpc.credentials.createInsecure(),
);