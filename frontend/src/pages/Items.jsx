import {
    ShieldCheck,
    AlertTriangle
} from "lucide-react";

import DashboardLayout from "../components/DashboardLayout";

function Items() {

    const items = [
        {
            id: 1,
            name: "Keychain",
            status: "SAFE",
            lastSeen: "2 mins ago"
        },
        {
            id: 2,
            name: "Wallet",
            status: "MISSING",
            lastSeen: "3 hours ago"
        },
        {
            id: 3,
            name: "Bottle",
            status: "SAFE",
            lastSeen: "Just now"
        }
    ];

    return (

        <DashboardLayout>

            <div>

                {/* HEADER */}

                <div className="mb-10">

                    <h1 className="text-5xl font-bold mb-3">

                        Tracked Items

                    </h1>

                    <p className="text-slate-400 text-lg">

                        Manage and monitor your RFID-tagged essentials.

                    </p>

                </div>

                {/* ITEMS GRID */}

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                    {items.map((item) => (

                        <div
                            key={item.id}
                            className="bg-slate-900 border border-slate-800 rounded-3xl p-6"
                        >

                            <div className="flex items-center justify-between mb-6">

                                <div className="p-4 rounded-2xl bg-blue-600">

                                    <ShieldCheck size={32} />

                                </div>

                                <div>

                                    {item.status === "SAFE" ? (

                                        <span className="text-green-400 font-semibold">

                                            SAFE

                                        </span>

                                    ) : (

                                        <span className="text-red-400 font-semibold flex items-center gap-2">

                                            <AlertTriangle size={18} />

                                            MISSING

                                        </span>

                                    )}

                                </div>

                            </div>

                            <h2 className="text-3xl font-bold mb-3">

                                {item.name}

                            </h2>

                            <p className="text-slate-400">

                                Last scanned:
                                <span className="ml-2 text-white">

                                    {item.lastSeen}

                                </span>

                            </p>

                        </div>
                    ))}

                </div>

            </div>

        </DashboardLayout>
    );
}

export default Items;