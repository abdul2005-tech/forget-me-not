import {
    AlertTriangle,
    ShieldAlert
} from "lucide-react";

import DashboardLayout from "../components/DashboardLayout";

function Alerts() {

    const alerts = [
        {
            id: 1,
            title: "Wallet Missing",
            description: "Wallet not detected for 3 hours.",
            severity: "HIGH"
        },
        {
            id: 2,
            title: "ESP32 Offline",
            description: "Device disconnected temporarily.",
            severity: "MEDIUM"
        }
    ];

    return (

        <DashboardLayout>

            <div>

                {/* HEADER */}

                <div className="mb-10">

                    <h1 className="text-5xl font-bold mb-3">

                        Smart Alerts

                    </h1>

                    <p className="text-slate-400 text-lg">

                        AI-powered notifications and item safety warnings.

                    </p>

                </div>

                {/* ALERT LIST */}

                <div className="space-y-6">

                    {alerts.map((alert) => (

                        <div
                            key={alert.id}
                            className="bg-slate-900 border border-slate-800 rounded-3xl p-6 flex items-start justify-between"
                        >

                            <div className="flex items-start gap-5">

                                <div className="p-4 rounded-2xl bg-red-500/20">

                                    <AlertTriangle
                                        size={32}
                                        className="text-red-400"
                                    />

                                </div>

                                <div>

                                    <h2 className="text-2xl font-bold mb-2">

                                        {alert.title}

                                    </h2>

                                    <p className="text-slate-400">

                                        {alert.description}

                                    </p>

                                </div>

                            </div>

                            <div className="flex items-center gap-2 text-yellow-400">

                                <ShieldAlert size={20} />

                                {alert.severity}

                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </DashboardLayout>
    );
}

export default Alerts;