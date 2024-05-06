import { FC, Dispatch, SetStateAction } from "react";
import { tipOptions } from "../data/propinas";

interface Props {
    setTip: Dispatch<SetStateAction<number>>
    tip: number;
}

export const TipPercentage: FC<Props> = ({ setTip, tip }) => {
    return (
        <div>
            <p className="text-2xl font-bold text-slate-700">
                Propina:
            </p>

            <form>
                {
                    tipOptions.map(tipOption => (
                        <div
                            key={tipOption.id}
                        >
                            <input
                                type="radio"
                                name="tip"
                                id={tipOption.id}
                                value={tipOption.value}
                                onChange={e => setTip(+e.target.value)}
                                checked={tipOption.value === tip}
                            />

                            <label
                                htmlFor={tipOption.id}
                                className="text-slate-700 ml-2"
                            >
                                {tipOption.label}
                            </label>

                        </div>
                    ))
                }
            </form>
        </div>
    )
}