import * as Icon from 'react-feather';
import SearchBar from "./SearchBar"

function Header(){
    return(
        <div className="w-[84vw] h-[8vh] border-b-[2px] border-gray-300 flex flex-row justify-between px-[4vw] items-center bg-white">
            <div className="flex flex-row justify-center items-center gap-4">
                <span className="font-extra2">Payments</span>
                <div className="md:flex md:flex-row justify-center items-center gap-1 hidden">
                    <Icon.HelpCircle className="opacity-70 text-sm h-[2.2vh]" />
                    <span>How it works?</span>
                </div>
            </div>

            <SearchBar placeholder="Search features, tutorials, etc." />

            <div className="flex flex-row justify-center items-center gap-2">
                <div className="w-12 h-12 flex flex-row justify-center items-center bg-gray-200 rounded-full">
                    <Icon.MessageCircle />
                </div>
                <div className="w-12 h-12 flex flex-row justify-center items-center bg-gray-200 rounded-full">
                    <Icon.ChevronDown />
                </div>
            </div>
        </div>
    )
}

export default Header