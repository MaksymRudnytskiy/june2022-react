import Headers from "../components/headers/Headers";
import {Outlet} from "react-router-dom";

function MainLayout() {
    return (
        <div>
            <Headers/>
            <Outlet/>
        </div>
    );
}

export default MainLayout;