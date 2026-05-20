function Dashboard() {

    const user = JSON.parse(
        localStorage.getItem("user")
    );

    return (
        <div>

            <h1>
                Welcome {user?.name}
            </h1>

        </div>
    );
}

export default Dashboard;