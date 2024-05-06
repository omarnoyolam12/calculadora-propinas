import { FC } from "react";
import { FaTrash } from "react-icons/fa6";


import { IMenuItem, IOrderItem } from "../interfaces";
import { currencyFormat } from "../helpers";

interface Props {
    order: IOrderItem[];
    removeItem: (idItem: IMenuItem['id']) => void
}

export const OrderContents: FC<Props> = ({ order, removeItem }) => {
    return (
        <div>
            <p className="text-blue-800 text-3xl font-bold">
                Consumo
            </p>

            <div className="mt-5">
                {
                    order.map((item, i) => (
                        <div
                            key={item.id}
                            className={`flex justify-between items-start p-3 rounded-md ${i % 2 === 0 && 'bg-slate-200'}`}
                        >
                            <div>
                                <p>
                                    {item.name} - {currencyFormat(item.price)}
                                </p>
                                <p className="text-slate-700 font-bold">
                                    Cantidad:{item.quantity} - {currencyFormat(item.price * item.quantity)}
                                </p>
                            </div>

                            <button
                                className="bg-red-500 w-7 h-7 flex justify-center items-center rounded"
                                onClick={() => removeItem(item.id)}
                            >
                                <FaTrash className="text-white" />
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}