import Wrapper from "../assets/wrappers/Navbar";
import { useDashboardContext } from "../page/DashboardLayout";
import { FaAlignLeft } from "react-icons/fa";
import Logo from "./Logo"; 
import LogoutContainer from "./LogoutContainer";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { showSidebar, toggleSidebar } = useDashboardContext();
  return (
    <Wrapper>
      <div className="nav-center">
        <button className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h4>
            <div className="logo-text">dashboard</div>
          </h4>
        </div>
        <div className="btn-container"> 
        <ThemeToggle/>
            <LogoutContainer/>
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
