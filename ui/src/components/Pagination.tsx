
import '@fortawesome/fontawesome-free/css/all.css'
import Pages from './Pages'

function Pagination(){

    const pages = Pages.map((number) => 
        <div className="mr-2 min-h-[24px] min-w-[24px] rounded-[3px] hover:bg-blue-500 flex flex-row justify-center iems-center">{number}</div> 
    )

    return(
        <div className="flex flex-row justify-between w-[40vw] items-center mt-4">
            <div className="px-2 flex flex-row gap-1 justify-center opacity-90 items-center border-[1px] border-gray-300 h-[5vh] w-auto rounded-[3px]">
                <i className="fas fa-chevron-left text-[15px]"></i>
                <span>Previous</span>
            </div>
            
            <div className="hidden md:flex flex-row justify-center items-center w-2/3">
                {pages}
            </div>

            <div className="px-2 flex flex-row gap-1 justify-center opacity-90 items-center border-[1px] border-gray-300 h-[5vh] w-auto rounded-[3px]">
                <span>Next</span>
                <i className="fas fa-chevron-right text-[15px]"></i>
            </div>
        </div>
    )
}

export default Pagination