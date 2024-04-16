import { FC } from "react";
import { IMenuItem } from "../interfaces";

interface Props {
    item: IMenuItem;
}

export const MenuItem: FC<Props> = ({ item }) => {
    return (
        <button className="flex justify-between items-center w-full px-5 py-3 transition-all duration-300 hover:bg-blue-100">
            <p className="text-slate-600">
                {item.name}
            </p>

            <p className="text-blue-800 font-bold">
                ${item.price}
            </p>
        </button>
    )
}