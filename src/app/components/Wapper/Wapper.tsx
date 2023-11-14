import { Suspense } from "react";
import AppBarComponent from "../AppBarComponent/AppBarComponent";
import DrawerRight from "../DrawerRight/DrawerRight";
import ItemBox from "../ItemBox/ItemBox";
import ItemList from "../ItemList/ItemList";
import { Skeleton } from "@mui/material";
import ModalTank from "../ModalTank/ModalTank";

const  Wapper = () => {
    return (
        <div>
            <AppBarComponent />
            <DrawerRight/>
            <Suspense
                fallback={<Skeleton variant="rectangular" width={1000} height={600} />}
            >
                <ItemList/>
            </Suspense>
            <ModalTank/>
        </div>
    )
}

export default Wapper  ;