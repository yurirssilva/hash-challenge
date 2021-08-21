import * as grpc from 'grpc';
import { DiscountClient } from './src/proto/discount/discount_grpc_pb';

export default new DiscountClient(
    `localhost:50051`,
    grpc.credentials.createInsecure(),
);