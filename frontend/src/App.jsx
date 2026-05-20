import {
  Routes,
  Route
} from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Items from "./pages/Items";
import Alerts from "./pages/Alerts";
import ConnectDevice from "./pages/ConnectDevice";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  return (

    <Routes>

      {/* PUBLIC ROUTES */}

      <Route
        path="/"
        element={<Login />}
      />

      <Route
        path="/signup"
        element={<Signup />}
      />

      {/* PROTECTED ROUTES */}

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
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

      <Route
        path="/connect-device"
        element={
          <ProtectedRoute>
            <ConnectDevice />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default App;