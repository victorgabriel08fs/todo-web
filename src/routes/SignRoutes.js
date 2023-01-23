import { Route, Routes, BrowserRouter } from "react-router-dom";
import Body from "../components/Body";
import MegaMenu from "../components/MegaMenu";
import HomePage from "../pages/public/HomePage";
import LoginPage from "../pages/public/LoginPage";

const SignRoutes = () => {
    return (
        <BrowserRouter>
            <MegaMenu />

            <Body>
                <Routes>
                    <Route element={<HomePage />} path="/" />
                    <Route element={<LoginPage />} path="/login" />
                </Routes>
            </Body>
        </BrowserRouter>
    )
}

export default SignRoutes;