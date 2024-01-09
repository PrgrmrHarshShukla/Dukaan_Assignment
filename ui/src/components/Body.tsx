import Header from "./Header"
import Middle from "./Middle"
import Orders from "./Orders"

function Body(){
    return(
        <div className="w-[84vw] min-h-screen bg-gray-100 flex flex-col justify-start items-center">
            <Header />
            <Middle />
            <Orders />
        </div>
    )
}

export default Body