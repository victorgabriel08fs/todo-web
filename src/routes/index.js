import react from "react";
import OtherRoutes from "./OtherRoutes";
import SignRoutes from "./SignRoutes";
import { useAuth } from '../contexts/auth';

const Routes = () => {
    const { signed } = useAuth();

    return (
        signed ? <OtherRoutes /> : <SignRoutes />
    );
}

export default Routes;