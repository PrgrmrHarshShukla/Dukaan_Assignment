import * as Icon from 'react-feather';
import '@fortawesome/fontawesome-free/css/all.css'

function OrderSearch(){
    return(
        <div className="flex flex-row w-[74vw] h-[7vh] justify-between items-center ">

            <div className="border-[2px] border-gray-200 rounded-[3px] w-[20vw] h-[5vh] flex flex-row justify-center items-center pl-4">
                <Icon.Search className="text-sm" />
                <input type="text" className="border-none flex flex-row justify-center items-center pb-1 rounded-[3px] w-[25vw] h-[4.5vh] pl-2" placeholder="Search by order ID..." />
            </div>

            <div className="flex flex-row gap-4 justify-center items-center">
                <div className="flex flex-row gap-1 justify-center opacity-90 items-center border-[1px] border-gray-300 h-[5vh] w-[5vw] rounded-[3px]">
                    <span>Sort</span>
                    <div className="hidden md:flex flex-row justify-center items-center h-[5vh] mt-1">
                        <i className="fas fa-arrow-down text-[10px]"></i>
                        <i className="fas fa-arrow-up text-[10px]"></i>
                    </div>
                </div>
                <div className="flex flex-row opacity-70 font-extra justify-center items-center border-[1px] border-gray-300 h-[5vh] w-[2.5vw] rounded-[3px]">
                    <Icon.Download />
                </div>
            </div>


        </div>
    )
}

export default OrderSearch