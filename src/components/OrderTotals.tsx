import { useMemo } from "react"
import { OrderItemType } from "../types"
import { formatCurrency } from "../helpers"




type OrderTotalsPropsType = {
    order: OrderItemType[],
    tip: number,
    placeOrder: () => void
}



export default function OrderTotals({ order, tip }: OrderTotalsPropsType) {

    const subtotalAmount =
        useMemo(() => order.reduce((accumulator, currentValue) => accumulator + (currentValue.quantity * currentValue.price), 0), [order]);

    const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order])

    const totalToPay = useMemo(() => subtotalAmount + tipAmount, [tip, order]);

    const reset = () => {
        alert('Thank you for your payment!');
    }


    return (
        <>
            <div className="flex items-center justify-center">
                <h2 className="font-black text-2xl">Tip & Totals</h2>
                <p>Subtotal: <span className="font-bold">{formatCurrency(subtotalAmount)}</span></p>

                <p>Tip: <span className="font-bold">{formatCurrency(tipAmount)}</span></p>

                <p>Total to Pay: <span className="font-bold">{formatCurrency(totalToPay)}</span></p>

                <button 
                className="center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" 
                disabled={totalToPay === 0}
                onClick={() => reset()}>
                    Pay now {formatCurrency(totalToPay)}
                </button>
            </div>

        </>
    )
}