import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import ConnectDevice from "../pages/ConnectDevice";

import ProtectedRoute from "../components/ProtectedRoute";
import Items from "../pages/Items";
import Alerts from "../pages/Alerts";

function AppRoutes() {

    return (

        <BrowserRouter>

            <Routes>

                {/* PUBLIC */}

                <Route
                    path="/"
                    element={<Login />}
                />

                <Route
                    path="/signup"
                    element={<Signup />}
                />

                {/* PROTECTED */}

                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>

                            <Dashboard />

                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/devices"
                    element={
                        <ProtectedRoute>

                            <ConnectDevice />

                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/items"
                    element={
                        <ProtectedRoute>

                            <Items />

                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/alerts"
                    element={
                        <ProtectedRoute>

                            <Alerts />

                        </ProtectedRoute>
                    }
                />

            </Routes>

        </BrowserRouter>
    );
}

export default AppRoutes;