
import * as Icon from 'react-feather';
interface SearchBarProps {
    placeholder: string
}


const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => {
    return(
        <div className="bg-gray-200 border rounded-[10px] w-[25vw] h-[5vh] flex flex-row justify-center items-center pl-4">
            <Icon.Search className="text-sm" />
            <input type="text" className="border-none flex flex-row justify-center items-center pb-1 bg-gray-200 rounded-[8px] w-[25vw] h-[5vh] pl-2" placeholder={placeholder} />
        </div>
    )
}

export default SearchBar