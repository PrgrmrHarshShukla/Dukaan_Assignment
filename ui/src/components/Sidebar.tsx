import Credits from "./Credits"
import Menu from "./Menu"
import Name from "./Name"

function Sidebar(){
    return(
        <div className="w-[16vw] min-h-screen bg-gray-900 text-white flex flex-col justify-start items-center">
            <Name />
            <Menu />
            <Credits />
        </div>
    )
}

export default Sidebar