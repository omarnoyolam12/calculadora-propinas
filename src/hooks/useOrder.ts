import { useState } from "react";

import { IOrderItem, IMenuItem } from "../interfaces";

export const useOrden = () => {

    const [orden, setOrden] = useState<IOrderItem[]>([]);
    const [tip, setTip] = useState(0);

    // *Añadir elementos al carrito------------------------------------
    const addItem = (item: IMenuItem) => {

        const itemExist = orden.find(ordenItem => ordenItem.id === item.id);

        if (itemExist) {

            const updatedOrder = orden.map(orderItem => orderItem.id === item.id ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem);
            setOrden(updatedOrder);

        } else {
            const newItem: IOrderItem = { ...item, quantity: 1 };
            setOrden([...orden, newItem]);
        }
    }

    // *Remover elemento del carrito--------------------------------------
    const removeItem = (idItem: IMenuItem['id']) => {

        const updatedOrder = orden.filter(item => item.id !== idItem);
        setOrden(updatedOrder);
    }

    // *Guardar orden-----------------------------------------------------
    const placeOrder = () => {
        setOrden([]);
        setTip(0);
    }

    return {
        orden,
        tip,
        setTip,
        addItem,
        removeItem,
        placeOrder
    }
}