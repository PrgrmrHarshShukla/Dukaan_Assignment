
import * as Icon from "react-feather"

function Credits() {
    return(
        <div className="mt-[15vh] w-[14vw] h-[9vh] pl-4 rounded-[10px] bg-gray-700 flex flex-row justify-start items-center gap-2">
            <div className="bg-gray-600 w-12 h-12 font-extra hidden md:flex flex-row justify-center items-center rounded-[8px]">
                <Icon.Archive />
            </div>
            <div className="flex flex-col justify-center items-start">
                <div className="flex flex-row gap-1">
                    <span className="hidden md:block text-sm opacity-70">
                        Available
                    </span>
                    <span className="text-sm opacity-70">
                        Credits
                    </span>
                </div>
                <span className="text-lg font-extra2">
                    222.10
                </span>
            </div>
        </div>
    )
}

export default Credits