import styled from "styled-components";
import { useSelector } from "react-redux";

export default function Navbar({ setCollapse }) {
  const profile = useSelector((userData) => userData.auth.user);
  return (
    <nav>
      <div className="sidebar-button">
        <i
          onClick={() => {
            setCollapse((p) => !p);
          }}
          className="bx bx-menu sidebarBtn"
        />
        <span className="dashboard">Dashboard</span>
      </div>

      <div className="profile">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6zes53m4a_2VLTcmTn_bHk8NO5SkuWfcQbg&usqp=CAU"
          alt=""
        />
        <span className="admin_name">{profile?.email}</span>
        <i className="bx bx-chevron-down" />
      </div>
    </nav>
  );
}
