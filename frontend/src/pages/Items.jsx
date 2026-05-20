import {
    ShieldCheck,
    AlertTriangle
} from "lucide-react";

import DashboardLayout from "../components/DashboardLayout";

import { useEffect, useState } from "react";

import API from "../services/api";

function Items() {

    const [items, setItems] = useState([]);

    useEffect(() => {

        fetchItems();

    }, []);

    const fetchItems = async () => {

        try {

            const response = await API.get(
                "/items/"
            );

            setItems(response.data);

        } catch (error) {

            console.log(error);
        }
    };

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

                                    {item.item_status === "SAFE" ? (

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

                                {item.item_name}

                            </h2>

                            <p className="text-slate-400 mb-2">

                                RFID UID:
                                <span className="ml-2 text-white">

                                    {item.rfid_uid}

                                </span>

                            </p>

                            <p className="text-slate-400">

                                Last scanned:
                                <span className="ml-2 text-white">

                                    {item.last_scanned || "Never"}

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