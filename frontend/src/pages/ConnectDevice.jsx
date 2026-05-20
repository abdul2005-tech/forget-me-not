import { useState } from "react";

import {
    Cpu,
    Wifi,
    CheckCircle
} from "lucide-react";

import API from "../services/api";

function ConnectDevice() {

    const [pairingCode, setPairingCode] = useState("");

    const [message, setMessage] = useState("");

    const [connected, setConnected] = useState(false);

    const connectDevice = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await API.post(
                "/device/connect",
                {
                    pairing_code: pairingCode
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setMessage(response.data.message);

            setConnected(true);

        } catch (error) {

            setMessage(
                error.response?.data?.error ||
                "Connection failed"
            );
        }
    };

    return (

        <div className="min-h-screen bg-slate-950 text-white p-8">

            {/* HEADER */}

            <div className="mb-10">

                <h1 className="text-5xl font-bold mb-3">

                    Connect Device

                </h1>

                <p className="text-slate-400 text-lg">

                    Pair your ESP32 smart tracker
                    with your Forget Me Not account.

                </p>

            </div>

            {/* MAIN CARD */}

            <div className="max-w-3xl bg-slate-900 border border-slate-800 rounded-3xl p-8">

                <div className="flex items-center gap-4 mb-8">

                    <div className="p-4 rounded-2xl bg-blue-600">

                        <Cpu size={40} />

                    </div>

                    <div>

                        <h2 className="text-3xl font-bold">

                            ESP32 Smart Device

                        </h2>

                        <p className="text-slate-400">

                            Connect your RFID tracking hardware.

                        </p>

                    </div>

                </div>

                {/* INPUT */}

                <div className="mb-6">

                    <label className="block mb-3 text-slate-300">

                        Pairing Code

                    </label>

                    <input
                        type="text"
                        placeholder="Enter pairing code"
                        value={pairingCode}
                        onChange={(e) =>
                            setPairingCode(e.target.value)
                        }
                        className="w-full px-5 py-4 rounded-2xl bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                    />

                </div>

                {/* BUTTON */}

                <button
                    onClick={connectDevice}
                    className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 transition-all text-lg font-semibold"
                >

                    Connect Device

                </button>

                {/* MESSAGE */}

                {message && (

                    <div className="mt-6 bg-slate-800 p-5 rounded-2xl border border-slate-700">

                        <p className="text-lg">

                            {message}

                        </p>

                    </div>
                )}

            </div>

            {/* CONNECTED STATUS */}

            {connected && (

                <div className="mt-10 max-w-3xl bg-green-500/10 border border-green-500 rounded-3xl p-8">

                    <div className="flex items-center gap-4">

                        <CheckCircle
                            size={40}
                            className="text-green-400"
                        />

                        <div>

                            <h2 className="text-2xl font-bold text-green-400">

                                Device Connected

                            </h2>

                            <p className="text-slate-300">

                                Your ESP32 tracker is now linked
                                to your account.

                            </p>

                        </div>

                    </div>

                    {/* ONLINE STATUS */}

                    <div className="mt-6 flex items-center gap-3">

                        <Wifi className="text-green-400" />

                        <span className="text-green-300">

                            Device Online

                        </span>

                    </div>

                </div>
            )}

        </div>
    );
}

export default ConnectDevice;