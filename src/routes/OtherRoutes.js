import { Route, Routes, BrowserRouter } from "react-router-dom";
import Body from "../components/Body";
import MegaMenu from "../components/MegaMenu";
import TasksPage from "../pages/private/TasksPage";

import UsersPage from "../pages/private/UsersPage";
import WorkspacePage from "../pages/private/WorkspacePage";
import HomePage from "../pages/public/HomePage";



const OtherRoutes = () => {
    return (
        <BrowserRouter>
            <MegaMenu />

            <Body>
                <Routes>
                    <Route element={<TasksPage />} path="/tasks/:id?" />
                    <Route element={<WorkspacePage />} path="/" />
                    <Route element={<WorkspacePage />} path="/workspaces/:id?" />
                    <Route element={<UsersPage />} path="/users" />
                </Routes>
            </Body>
        </BrowserRouter>
    )
}

export default OtherRoutes;