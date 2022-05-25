import options from "./options";
import { useDispatch } from "react-redux";

import { BrowserRouter as Router, Link } from "react-router-dom";
import { Logout } from "../../../redux/actions";
export default function Sidebar({ active, setActive, collapse }) {
  const dispatch = useDispatch();
  return (
    <div className={`sidebar ${collapse && "active"}`}>
      <div className="logo-details">
        <i className="bx bxl-c-plus-plus" />
        <span className="logo_name">Logo</span>
      </div>

      <ul className="nav-links">
        {options.map(({ key, leftIcon, label }) => (
          <li key={key}>
            <Link
              onClick={() => {
                setActive(key);
              }}
              to={key == "admin" ? "/admin" : "/admin/" + key}
              className={key == active ? "active" : ""}
            >
              {leftIcon}
              <span className="links_name">{label}</span>
            </Link>
          </li>
        ))}

        <li className="log_out">
          <Link
            onClick={() => {
              dispatch(Logout());
              window.location.reload();
            }}
          >
            <i className="bx bx-log-out" />
            <span className="links_name">Log out</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
