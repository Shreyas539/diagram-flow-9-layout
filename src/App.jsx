import { Routes, Route } from "react-router-dom";
import EntryScreen from "./features/auth/EntryScreen";
import DashboardLayout from "./layouts/DashboardLayout";
import TopologyCanvas from "./features/topology/TopologyCanvas";
import Signin from "./features/auth/Signin";

const App = () => {
  return (
    <div className="h-screen w-full flex flex-col overflow-hidden bg-slate-50">
      {/* GLOBAL HEADER (Brown) */}
      <div className="h-16 bg-[#A65E2E] flex items-center justify-center text-white font-bold shrink-0 w-full z-[100] shadow-md">
        Header (System Name / Logo)
      </div>

      {/* DYNAMIC CONTENT AREA - Ensure h-full is calculated correctly */}
      <div className="flex-1 min-h-0 relative">
        <Routes>
          <Route path="/" element={<EntryScreen />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<TopologyCanvas />} />
            <Route path="topology" element={<TopologyCanvas />} />
            <Route path="faults" element={<div>Fault Table Component</div>} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
