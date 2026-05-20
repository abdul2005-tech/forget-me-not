import {
    LayoutDashboard,
    ShieldCheck,
    Cpu,
    Bell,
    LogOut
} from "lucide-react";

import { Link } from "react-router-dom";

function Sidebar() {

    const logout = () => {

        localStorage.removeItem("token");

        localStorage.removeItem("user");

        window.location.href = "/";
    };

    return (

        <div className="w-72 bg-slate-900 border-r border-slate-800 p-6 flex flex-col justify-between">

            <div>

                <h1 className="text-3xl font-bold text-blue-500 mb-10">

                    Forget Me Not

                </h1>

                <div className="space-y-4">

                    <Link
                        to="/dashboard"
                        className="flex items-center gap-3 bg-blue-600 p-3 rounded-xl"
                    >

                        <LayoutDashboard size={20} />

                        Dashboard

                    </Link>

                    <Link
                        to="/devices"
                        className="flex items-center gap-3 hover:bg-slate-800 p-3 rounded-xl transition-all"
                    >

                        <Cpu size={20} />

                        Devices

                    </Link>

                    <Link
                        to="/items"
                        className="flex items-center gap-3 hover:bg-slate-800 p-3 rounded-xl transition-all"
                    >

                        <ShieldCheck size={20} />

                        Items

                    </Link>

                    <Link
                        to="/alerts"
                        className="flex items-center gap-3 hover:bg-slate-800 p-3 rounded-xl transition-all"
                    >

                        <Bell size={20} />

                        Alerts

                    </Link>

                </div>

            </div>

            <button
                onClick={logout}
                className="flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 transition-all p-3 rounded-xl"
            >

                <LogOut size={20} />

                Logout

            </button>

        </div>
    );
}

export default Sidebar;