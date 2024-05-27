
import { useState } from "react";
import type { MenuItemType, OrderItemType } from "../types";

export default function useOrder() {
    const [order, setOrder] = useState<OrderItemType[]>([]);
    const [tip, setTip] = useState(0);

    const addItem = (item: MenuItemType) => {
        const itemExists = order.find(orderFind => orderFind.id === item.id);
        if(itemExists) {
            // const updatedOrder = order.map(orderMap => {
            //     if(orderMap.id === item.id) {
            //         return {...orderMap, quantity: orderMap.quantity+1}
            //     } else {
            //         return {...orderMap}
            //     }
            // })
            const updatedOrder = order.map(orderMap => orderMap.id === item.id ? {...orderMap, quantity: orderMap.quantity+1} : orderMap);

            setOrder(updatedOrder)
        } else {
           const newItem = {...item, quantity: 1};
           setOrder([...order, newItem]);
        }
   
    }

    const removeItem = (id: MenuItemType['id']) => {
        setOrder(order.filter(orderFilter => orderFilter.id !== id))
    }

    const placeOrder = () => {
        console.log('Saving...');
    }
            
    return {
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        placeOrder
    }
}