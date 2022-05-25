import Navbar from "../Layout/Topbar";
import Sidebar from "../Layout/Sidebar";
import DashboardRoutes from "./DashboardRoutes";
import "./style.css";
import { useState } from "react";
export default function App() {
  let path = window.location.pathname.split("/");
  const [selectedItem, setSelectedItem] = useState(path[path.length - 1]);
  const [collapse, setCollapse] = useState(true);
  return (
    <>
      <Sidebar
        collapse={collapse}
        active={selectedItem}
        setActive={setSelectedItem}
      />
      <section className="home-section">
        <Navbar setCollapse={setCollapse} />
        <div className="home-content">
          <DashboardRoutes />
        </div>
      </section>
    </>
  );
}
