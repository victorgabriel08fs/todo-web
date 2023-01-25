import { Route, Routes, BrowserRouter } from "react-router-dom";
import Body from "../components/Body";
import MegaMenu from "../components/MegaMenu";
import HomePage from "../pages/public/HomePage";
import LoginPage from "../pages/public/LoginPage";
import SignupPage from "../pages/public/SignupPage";

const SignRoutes = () => {
    return (
        <BrowserRouter>
            <MegaMenu />

            <Body>
                <Routes>
                    <Route element={<SignupPage />} path="/signup" />
                    <Route element={<LoginPage />} path="/login" />
                    <Route element={<LoginPage />} path="/" />
                </Routes>
            </Body>
        </BrowserRouter>
    )
}

export default SignRoutes;