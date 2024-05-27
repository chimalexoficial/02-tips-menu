import { useMemo } from "react"
import { OrderItemType } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsPropsType = {
    order: OrderItemType[],
    tip: number,
    placeOrder: () => void
}

export default function OrderTotals({order, tip, placeOrder} : OrderTotalsPropsType) {

    const subtotalAmount = 
    useMemo(() => order.reduce((accumulator, currentValue) => accumulator + (currentValue.quantity * currentValue.price), 0), [order]);

    const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order])

    const totalToPay = useMemo(() => subtotalAmount + tipAmount, [tip, order])


    return (
        <>
            <div>
                <h2 className="font-black text-2xl">Tip & Totals</h2>
                <p>Subtotal: <span className="font-bold">{formatCurrency(subtotalAmount)}</span></p>

                <p>Tip: <span className="font-bold">{formatCurrency(tipAmount)}</span></p>

                <p>Total to Pay: <span className="font-bold">{formatCurrency(totalToPay)}</span></p>
            </div>

            <button 
            className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
            disabled={totalToPay === 0}
            onClick={placeOrder}>
                Pay now
            </button>
        </>
    )
}