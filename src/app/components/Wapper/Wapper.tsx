import AppBarComponent from "../AppBarComponent/AppBarComponent";
import DrawerRight from "../DrawerRight/DrawerRight";
import ItemBox from "../ItemBox/ItemBox";

const  Wapper = () => {
    return (
        <div>
            <AppBarComponent />
            <DrawerRight/>
            <ItemBox/>
        </div>
    )
}

export default Wapper  ;