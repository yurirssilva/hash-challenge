export class Product {
    public id!: number;
    public title!: string;
    public description!: string;
    public amount!: number;
    public is_gift!: boolean;

    constructor(props: Product) {
        Object.assign(this, props)
    }
}