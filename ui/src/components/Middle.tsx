function Middle(){
    return(
        <div className="flex flex-col justify-center items-center w-[84vw] h-[35vh] gap-4">
            
            <div className="flex flex-row justify-between items-center w-5/6 md:w-[84vw] sm:px-[4vw]">
                <span className="text-lg font-extra2">Overview</span>
                <select className="rounded-[4px] border-2 border-gray-200 px-1 py-[2px]">
                    <option value="Last Month">Last Month</option>
                </select>
            </div>

            <div className="flex flex-row justify-center items-center gap-4">
                <div className="w-[38vw] h-[14vh] gap-4 bg-white rounded-[6px] flex flex-col justify-center items-start pl-4">
                    <span className="opacity-80 text-sm">Online orders</span>
                    <span className="font-extra2 text-2xl">231</span>
                </div>
                <div className="w-[38vw] h-[14vh] gap-4 bg-white rounded-[6px] flex flex-col justify-center items-start pl-4">
                    <span className="opacity-80 text-sm">Amount received</span>
                    <span className="font-extra2 text-2xl">₹23,92,312.19</span>
                </div>
            </div>

            <div className="flex flex-row justify-start items-center w-[84vw] px-[4vw] mt-4">
                <span className="text-lg font-extra2">Transactions | This Month</span>
            </div>



        </div>
    )
}

export default Middle