import '@fortawesome/fontawesome-free/css/all.css'

interface MenuItemsProps {
    icon: React.ComponentType<any>,
    name: string
}

const MenuItem: React.FC<MenuItemsProps> = ({ icon: IconComponent, name }) => {
    // const IconComponent = Icon.icon;
    return(
        <div className="w-[14vw] pl-[22px] rounded-[10px] h-[5vh] hover:bg-gray-700 flex flex-row justify-start gap-3 items-center">
            <IconComponent className="font-extra" />
            <span className=" text-[18px] font-extra opacity-90 md:block hidden">{name}</span>
        </div>
    )
}

export default MenuItem