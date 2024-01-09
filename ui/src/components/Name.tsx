
import icon from "./images/icon.png"
import '@fortawesome/fontawesome-free/css/all.css'

function Name(){
    return(
        <div className="w-[15vw] h-[15vh] flex flex-row justify-around items-center ">
            <div className="flex flex-row justify-around items-center gap-3">
                <img src={icon} className="w-12 h-12 rounded-[10px]" />

                <div className="hidden md:flex md:flex-col justify-center items-start">
                    <span className="text-lg font-semibold">Nishyan</span>
                    <u className="opacity-80">Visit store</u>
                </div>
            </div>

            <i className="fas fa-chevron-down font-semibold hidden md:block"></i>
        </div>
    )
}

export default Name