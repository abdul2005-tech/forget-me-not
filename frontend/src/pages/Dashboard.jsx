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
        <div>

            <h1>
                Welcome {user?.name}
            </h1>
            <button onClick={logout}>
                Logout
            </button>

        </div>
    );
}

export default Dashboard;