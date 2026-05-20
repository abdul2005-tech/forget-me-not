import { useState } from "react";
import API from "../services/api";

function ConnectDevice() {

    const [pairingCode, setPairingCode] = useState("");

    const handlePairDevice = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await API.post(
                "/device/pair",
                {
                    pairing_code: pairingCode
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            alert(response.data.message);

        } catch (error) {

            alert(
                error.response.data.error
            );
        }
    };

    return (

        <div>

            <h1>Connect ESP32 Device</h1>

            <input
                type="text"
                placeholder="Enter Pairing Code"
                value={pairingCode}
                onChange={(e) =>
                    setPairingCode(e.target.value)
                }
            />

            <br />

            <button onClick={handlePairDevice}>
                Pair Device
            </button>

        </div>
    );
}

export default ConnectDevice;