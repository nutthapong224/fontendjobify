import { useDashboardContext } from "../page/DashboardLayout";
import links from "../utils/link";
import { NavLink } from "react-router-dom";

const NavLinks = ({ isBigSidebar }) => {
  const { toggleSidebar, user } = useDashboardContext();

  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, icon } = link;

        // Check if user is defined and has a role
        if (path === "/dashboard/admin" && (!user || user.role !== "admin")) {
          return null;
        }

        return (
          <NavLink
            to={path}
            key={text}
            className="nav-link"
            onClick={isBigSidebar ? null : toggleSidebar}
          >
            <span className="icon">{icon}</span> {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
