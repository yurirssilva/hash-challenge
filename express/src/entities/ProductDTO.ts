export class ProductDTO {
    public id!: number;
    public quantity!: number;

    constructor(props: ProductDTO) {
        Object.assign(this, props)
    }
}