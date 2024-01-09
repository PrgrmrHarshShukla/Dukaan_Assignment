import MenuItem from "./MenuItem"
import Menulist from "./MenuList"

function Menu() {

    const list = Menulist.map(({icon, name}) => 
        <MenuItem icon={icon} name={name} />
    )

    return(
        <div>
            {list}
        </div>
    )
}

export default Menu