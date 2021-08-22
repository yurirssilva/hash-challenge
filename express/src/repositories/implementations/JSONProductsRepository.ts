import { IProductsRepository } from "../IProductsRepository";
import * as fs from 'fs/promises';
import * as path from 'path';
import _ from "lodash"
import { Product } from "../../entities/Product";

export class JSONProductsRepository implements IProductsRepository {
    async findById(id: number):Promise<Product|null> {
        let file = await fs.readFile(path.join(__dirname, '../../database/products.json'), 'utf8')
        const products = JSON.parse(file);
        let product:Product = _.find(products, {'id': id})
        if(product)
            return new Product(product);
        
        return null;
        // fs.readFile(path.join(__dirname, '../../database/products.json'), 'utf8', (error, data) => {
        //     try {
        //     if (error) {
        //         throw new Error("Error reading file from disk: "+ error)
        //     } 
        //         const products = JSON.parse(data);
        //         console.log("Products:", products);
        //         let product:Product = _.find(products, {'id': id})
        //         console.log('product: ', product);
        //         return Product;
                
        //     } catch (err) {
        //         console.log("Error parsing JSON string:", err);
        //     }
        // })
    }

    async findGift(): Promise<Product[]|null>{
        return null;
    }
}