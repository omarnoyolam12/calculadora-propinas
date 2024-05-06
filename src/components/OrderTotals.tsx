import { FC, useMemo } from "react";
import { IOrderItem } from "../interfaces";
import { currencyFormat } from "../helpers";

interface Props {
    order: IOrderItem[];
    tip: number;
    placeOrder: () => void;
}

export const OrderTotals: FC<Props> = ({ order, tip, placeOrder }) => {

    const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order]);

    const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order]);

    const totalAmount = useMemo(() => subtotalAmount + tipAmount, [tipAmount, subtotalAmount]);

    return (
        <>
            <div className="space-y-3">
                <p className="font-bold text-2xl text-slate-700 text-right">
                    Totales y Propina:
                </p>

                <p className="text-slate-700 text-right">
                    Subtotal a pagar: <span className="font-bold">{currencyFormat(subtotalAmount)}</span>
                </p>

                <p className="text-slate-700 text-right">
                    Propina: <span className="font-bold">{currencyFormat(tipAmount)}</span>
                </p>

                <p className="text-slate-700 text-right">
                    Total a pagar: <span className="font-bold">{currencyFormat(totalAmount)}</span>
                </p>
            </div>

            <button
                className="w-full bg-blue-600 text-white mt-10 p-2 disabled:bg-blue-300 disabled:cursor-not-allowed"
                disabled={totalAmount === 0}
                onClick={placeOrder}
            >
                Guardar orden
            </button>
        </>
    )
}