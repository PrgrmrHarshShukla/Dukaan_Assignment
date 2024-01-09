import OrderItems from "./OrderItems";
import OrderSearch from "./OrderSearch"
import OrderList from "./OrderList";
import Pagination from "./Pagination";


import * as Icon from 'react-feather';


function Orders(){
    const list = OrderList.map(({ id, date, amount, fees }) => 
        <OrderItems id={id} date={date} amount={amount} fees={fees} />
    )

    return(
        <div className="-mt-4 flex flex-col w-[76vw] h-auto justify-start items-center sm:px-[4vw] rounded-[6px] bg-white py-1">
            <OrderSearch />

            <div className="bg-gray-300 w-[74vw] rounded-[3px] flex flex-row justify-between items-center px-2 h-[5vh] mt-1 font-extra3 opacity-80">
                <span>Order ID</span>
                <select className="bg-gray-300">
                    <option value="">Order Date</option>
                </select>
                <span>Order amount</span>
                <div className="flex flex-row justify-center items-center">
                    Transaction fees <Icon.AlertCircle className="h-[2vh] opacity-75" />
                </div>
            </div>

            {list}

            <Pagination />


        </div>
    )
}

export default Orders