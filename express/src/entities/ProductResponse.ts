export class ProductResponse {
    public id!: number;
    public quantity!: number;
    public unit_amount!: number;
    public total_amount!: number;
    public discount!: number;
    public is_gift!: boolean;

    constructor(props: ProductResponse) {
        Object.assign(this, props)
    }
}