import MenuItem from "./MenuItem"
import menulist from "./MenuList"

function Menu() {

    const list = menulist.map(({icon, name}) => 
        <MenuItem icon={icon} name={name} />
    )

    return(
        <div>
            {list}
        </div>
    )
}

export default Menu