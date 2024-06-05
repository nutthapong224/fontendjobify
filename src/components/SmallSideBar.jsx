import { FaTimes } from "react-icons/fa";
import Wrapper from "../assets/wrappers/SmallSidebar";
import { useDashboardContext } from "../page/DashboardLayout";
import Logo from "./Logo";
import links from "../utils/link";
import { NavLink } from "react-router-dom";

const SmallSideBar = () => {
  const { showSidebar, toggleSidebar } = useDashboardContext(); // Use context to get showSidebar and toggleSidebar

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
        onClick={toggleSidebar}
      >
        <div className="content">
          <button className="close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <div className="nav-links">
            {links.map((link) => {
              const { text, path, icon } = link;
              return (
                <NavLink
                  to={path}
                  key={text}
                  className="nav-link"
                  onClick={toggleSidebar}
                >
                  <span className="icon">{icon}</span> {text}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSideBar;
