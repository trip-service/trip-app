import { useSelector } from "react-redux";
import AuthRoutes from "./AuthRoutes";
import NonAuthRoutes from "./NonAuthRoutes";

const SwitchRoute = () => {
    const isAuth = useSelector(({auth}) => auth.isAuth);

    return isAuth
        ? <AuthRoutes />
        : <NonAuthRoutes />;
}

export default SwitchRoute;
