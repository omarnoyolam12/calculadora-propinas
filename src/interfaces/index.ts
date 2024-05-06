export interface IMenuItem {
    id: number;
    name: string;
    price: number;
}

export interface IOrderItem extends IMenuItem {
    quantity: number;
}