import { useState } from "react";
import { useNavigate } from "react-router-dom";

import API from "../services/api";

function Signup() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSignup = async (e) => {

        e.preventDefault();

        try {

            await API.post(
                "/auth/signup",
                formData
            );

            alert("Signup successful");

            navigate("/");

        } catch (error) {

            alert(
                error.response.data.error
            );
        }
    };

    return (
        <div>

            <h1>Signup</h1>

            <form onSubmit={handleSignup}>

                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                />

                <br />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                />

                <br />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                />

                <br />

                <button type="submit">
                    Signup
                </button>

            </form>

        </div>
    );
}

export default Signup;