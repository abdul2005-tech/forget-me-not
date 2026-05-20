import {
    LayoutDashboard,
    ShieldCheck,
    Bell,
    Cpu,
    LogOut,
    Activity
} from "lucide-react";

function Dashboard() {

    const user = JSON.parse(
        localStorage.getItem("user")
    );

    const logout = () => {

        localStorage.removeItem("token");

        localStorage.removeItem("user");

        window.location.href = "/";
    };

    return (

        <div className="min-h-screen flex bg-slate-950 text-white">

            {/* SIDEBAR */}

            <div className="w-72 bg-slate-900 border-r border-slate-800 p-6 flex flex-col justify-between">

                <div>

                    <h1 className="text-3xl font-bold text-blue-500 mb-10">

                        Forget Me Not

                    </h1>

                    <div className="space-y-4">

                        <div className="flex items-center gap-3 bg-blue-600 p-3 rounded-xl cursor-pointer">

                            <LayoutDashboard size={20} />

                            <span>Dashboard</span>

                        </div>

                        <div className="flex items-center gap-3 hover:bg-slate-800 p-3 rounded-xl cursor-pointer transition-all">

                            <ShieldCheck size={20} />

                            <span>Tracked Items</span>

                        </div>

                        <div className="flex items-center gap-3 hover:bg-slate-800 p-3 rounded-xl cursor-pointer transition-all">

                            <Cpu size={20} />

                            <span>Devices</span>

                        </div>

                        <div className="flex items-center gap-3 hover:bg-slate-800 p-3 rounded-xl cursor-pointer transition-all">

                            <Bell size={20} />

                            <span>Alerts</span>

                        </div>

                    </div>

                </div>

                {/* LOGOUT */}

                <button
                    onClick={logout}
                    className="flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 transition-all p-3 rounded-xl"
                >

                    <LogOut size={20} />

                    Logout

                </button>

            </div>

            {/* MAIN CONTENT */}

            <div className="flex-1 p-8 overflow-y-auto">

                {/* TOP HEADER */}

                <div className="flex items-center justify-between mb-10">

                    <div>

                        <h1 className="text-4xl font-bold">

                            Welcome back,
                            <span className="text-blue-400 ml-3">

                                {user?.name}

                            </span>

                        </h1>

                        <p className="text-slate-400 mt-2">

                            Smart tracking dashboard overview.

                        </p>

                    </div>

                    {/* STATUS */}

                    <div className="flex items-center gap-3 bg-slate-900 px-5 py-3 rounded-2xl border border-slate-800">

                        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>

                        <span>ESP32 Connected</span>

                    </div>

                </div>

                {/* ANALYTICS CARDS */}

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

                    {/* CARD 1 */}

                    <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">

                        <h3 className="text-slate-400 mb-2">

                            Total Items

                        </h3>

                        <h1 className="text-5xl font-bold text-blue-400">

                            12

                        </h1>

                    </div>

                    {/* CARD 2 */}

                    <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">

                        <h3 className="text-slate-400 mb-2">

                            Missing Items

                        </h3>

                        <h1 className="text-5xl font-bold text-red-400">

                            2

                        </h1>

                    </div>

                    {/* CARD 3 */}

                    <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">

                        <h3 className="text-slate-400 mb-2">

                            Devices Connected

                        </h3>

                        <h1 className="text-5xl font-bold text-green-400">

                            1

                        </h1>

                    </div>

                    {/* CARD 4 */}

                    <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">

                        <h3 className="text-slate-400 mb-2">

                            Last Scan

                        </h3>

                        <h1 className="text-2xl font-bold text-cyan-400">

                            Keychain

                        </h1>

                    </div>

                </div>

                {/* LIVE RFID ACTIVITY */}

                <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6">

                    <div className="flex items-center gap-3 mb-6">

                        <Activity className="text-blue-400" />

                        <h2 className="text-2xl font-bold">

                            Live RFID Activity

                        </h2>

                    </div>

                    <div className="space-y-4">

                        <div className="bg-slate-800 p-4 rounded-2xl flex justify-between items-center">

                            <div>

                                <h3 className="font-semibold">

                                    Keychain Detected

                                </h3>

                                <p className="text-slate-400 text-sm">

                                    RFID UID: 1ac1471

                                </p>

                            </div>

                            <span className="text-green-400">

                                SAFE

                            </span>

                        </div>

                        <div className="bg-slate-800 p-4 rounded-2xl flex justify-between items-center">

                            <div>

                                <h3 className="font-semibold">

                                    Wallet Missing

                                </h3>

                                <p className="text-slate-400 text-sm">

                                    Last detected 2 hours ago

                                </p>

                            </div>

                            <span className="text-red-400">

                                ALERT

                            </span>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Dashboard;