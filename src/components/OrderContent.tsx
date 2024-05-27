import { formatCurrency } from "../helpers"
import { MenuItemType, OrderItemType } from "../types"



type OrderContentProps = {
    order: OrderItemType[],
    removeItem: (id: MenuItemType['id']) => void
}

export default function OrderContents({ order, removeItem }: OrderContentProps) {
    return (
        <div>
            <h2 className="font-black text-4xl">Details</h2>
            <div className="space-y-3 mt-5">
                {order.length === 0 ?
                    <p className="text-center">The order is empty</p>
                    :
                    (order.map(orderMap => (
                        <div
                            className="flex justify-between border-b border-gray-200"
                            key={orderMap.id}>
                            <div>
                                <p className="text-lg">{orderMap.name} - {formatCurrency(orderMap.price)}</p>

                                <p className="font-black">Quantity: {orderMap.quantity} - {formatCurrency(orderMap.price * orderMap.quantity)}</p>
                            </div>

                            <button 
                            className=" bg-red-600 h-8 w-8 aspect-square text-white font-black"
                            onClick={() => removeItem(orderMap.id)}>X</button>
                        </div>
                    )))}
            </div>
        </div>
    )
}