import react from "react";
import { Route, Routes, BrowserRouter, Router } from "react-router-dom";
import Body from "../components/Body";
import MegaMenu from "../components/MegaMenu";
import HomePage from "../pages/HomePage";
import TasksPage from "../pages/TasksPage";

import UsersPage from "../pages/UsersPage";
import WorkspacePage from "../pages/WorkspacePage";

const MainRoutes = () => {
    return (
        <BrowserRouter>
            <MegaMenu />

            <Body>
                <Routes>
                    <Route element={<HomePage />} path="/" />
                    <Route element={<TasksPage />} path="/tasks/:id?" />
                    <Route element={<WorkspacePage />} path="/workspaces/:id?" />
                    <Route element={<UsersPage />} path="/users" />
                </Routes>
            </Body>
        </BrowserRouter>
    )
}

export default MainRoutes;