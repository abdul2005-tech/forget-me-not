import Sidebar from "./Sidebar";

function DashboardLayout({ children }) {

    return (

        <div className="flex bg-slate-950 text-white min-h-screen">

            <Sidebar />

            <div className="flex-1 p-8 overflow-y-auto">

                {children}

            </div>

        </div>
    );
}

export default DashboardLayout;