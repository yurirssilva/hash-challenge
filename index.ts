import express from 'express';
import * as grpc from 'grpc';
import client from './client';
import { GetDiscountRequest } from './src/proto/discount/discount_pb'
import { Empty } from 'google-protobuf/google/protobuf/empty_pb'
// rest of the code remains same
const app = express();
const PORT = 8000;

var PROTO_PATH = __dirname + '/discount.proto';

app.get('/', (req, res) => res.send('Express + TypeScript Server'));
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
    client.getDiscount(new GetDiscountRequest().setProductid(1), (err, discount) => {
        if (err)
            console.log('err: ', err);
        else
            console.log('discount: ', discount);

    })
});