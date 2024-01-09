
interface OrderItemProp {
    id: string,
    date: string,
    amount: number,
    fees: number
}

const OrderItems: React.FC<OrderItemProp> = ({ id, date, amount, fees }) => {
    return(
        <div className="w-[74vw] rounded-[3px] hover:bg-gray-200 flex flex-row justify-between items-center px-2 h-[6vh] border-b-[1.5px] border-gray-200">
            <span className="font-extra3 text-blue-600">{id}</span>
            <span className="font-extra3 -ml-[1vw]">{date}</span>
            <span className="font-extra3 mr-[7vw]">₹{amount}</span>
            <span className="font-extra3 ">₹{fees}</span>
        </div>
    )
}

export default OrderItems